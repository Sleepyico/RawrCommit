import * as vscode from "vscode";
import { GitExtension, Repository } from "./api/git";
import EmojiLog from "./EmojiLog/EmojiLog";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand(
    "extension.EmojiPrefix",
    (uri?) => {
      const git = getGitExtension();

      if (!git) {
        vscode.window.showErrorMessage("Unable to load Git Extension");
        return;
      }

      let emojis = EmojiLog;
      let items: any[] = [];

      for (let i = 0; i < emojis.length; i++) {
        items.push({
          label: `${emojis[i].emoji}`,
          description: `${emojis[i].description}`,
          emoji: emojis[i].emoji,
        });
      }

      let nextPage = {
        label: "See more...↗️",
        description: "",
        emoji: "",
      };
      let prevPage = {
        label: "Go Back...↩️",
        description: "",
        emoji: "",
      };

      let mainItems = [...items.slice(0, 12), nextPage];

      function handleGit(selected: any) {
        vscode.commands.executeCommand("workbench.view.scm");

        if (uri) {
          let selectedRepository = git?.repositories.find((repository) => {
            return (
              repository.rootUri.path === uri._rootUri?.path || uri.rootUri.path
            );
          });
          if (selectedRepository) {
            if (selected.emoji !== "⏭️" && selected.emoji !== "⏪️") {
              prefixCommit(selectedRepository, selected.emoji);
            }
          }
        } else {
          for (let repo of git!.repositories) {
            if (selected.emoji !== "⏭️" && selected.emoji !== "⏪️") {
              prefixCommit(repo, selected.emoji);
            }
          }
        }
      }

      function handleWindow(tempItems: any) {
        vscode.window
          .showQuickPick(tempItems, {
            placeHolder: "Select a particular Emoji Log git commit.",
          })
          .then((selected: any) => {
            if (!selected) return;

            if (selected === nextPage) {
              handleWindow([prevPage, ...items.slice(12)]);
            }
            if (selected === prevPage) {
              handleWindow([...items.slice(0, 12), nextPage]);
            }
            if (selected !== nextPage && selected !== prevPage) {
              handleGit(selected);
            }
          });
      }

      handleWindow(mainItems);
    }
  );

  context.subscriptions.push(disposable);
}

function prefixCommit(repository: Repository, prefix: String) {
  repository.inputBox.value = `${prefix} ${repository.inputBox.value}`;
}

function getGitExtension() {
  const vscodeGit = vscode.extensions.getExtension<GitExtension>("vscode.git");
  const gitExtension = vscodeGit && vscodeGit.exports;
  return gitExtension && gitExtension.getAPI(1);
}

export function deactivate() {}
