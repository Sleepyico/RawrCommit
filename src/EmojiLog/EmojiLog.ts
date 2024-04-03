interface Emoji {
  readonly emoji: any;
  readonly description: any;
}

let EmojiLog: Array<Emoji> = [
  {
    emoji: "🌟feat:",
    description: "Select when creating new things.",
  },
  {
    emoji: "🐞fix:",
    description: "Select when fixing a bug.",
  },
  {
    emoji: "⚙️refactor:",
    description:
      "Select when improving piece of code but no new functionality nor new perf occur.",
  },
  {
    emoji: "📝docs:",
    description: "Select when adding or editing documentation.",
  },
  {
    emoji: "🚀release:",
    description: "Select when releasing a new version.",
  },
  {
    emoji: "🤹ci:",
    description: "Select when editing CI scripts.",
  },
  {
    emoji: "🏗️build:",
    description:
      "Select when concerning build change or external dependencies.",
  },
  {
    emoji: "🌈style:",
    description: "Select when working on stylings and code style.",
  },
  {
    emoji: "⚡perf:",
    description: "Select when working on performances.",
  },
  {
    emoji: "🖥️wip:",
    description: "Select when work is not finished.",
  },
  {
    emoji: "🧪test:",
    description: "Select when adding or editing tests or related commits.",
  },
  {
    emoji: "⚠️break:",
    description: "Select when adding change that breaks previous versions.",
  },
  {
    emoji: "⏮️revert:",
    description: "Select when going back and rollbacks.",
  },
];
export default EmojiLog;
