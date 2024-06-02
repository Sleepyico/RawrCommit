interface Emoji {
  readonly emoji: string;
  readonly description: string;
}

let EmojiLog: Array<Emoji> = [
  {
    emoji: "🌟feat:",
    description:
      "Select when creating new things. e.g. a new feature for the users.",
  },
  {
    emoji: "🐞fix:",
    description: "Select when fixing a bug.",
  },
  {
    emoji: "♻️refactor:",
    description:
      "Select when improving piece of code and refactoring production code. e.g. renaming a variable.",
  },
  {
    emoji: "🍱chore:",
    description:
      "Select when updating grunt tasks etc, yet no production code change.",
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
    emoji: "💄style:",
    description: "Select when working on stylings and code style.",
  },
  {
    emoji: "⚡perf:",
    description: "Select when working on performances.",
  },
  {
    emoji: "🚧wip:",
    description: "Select when work is not finished.",
  },
  {
    emoji: "🧪test:",
    description: "Select when adding or editing tests or related commits.",
  },
  {
    emoji: "🎉new:",
    description: "Select when starting a new project.",
  },
  {
    emoji: "⚠️break:",
    description: "Select when adding change that breaks previous versions.",
  },
  {
    emoji: "⏮️revert:",
    description: "Select when going back and rollbacks.",
  },
  // Extra commit emotes
  {
    emoji: "🚑critical:",
    description: "Select when fixing critical issues.",
  },
  {
    emoji: "💥breaking:",
    description: "Select when fixing breaking issues.",
  },
  {
    emoji: "🔒security:",
    description: "Select when fixing security or privacy issues.",
  },
  {
    emoji: "🔐secrets:",
    description: "Select when adding or updating secrets.",
  },
  {
    emoji: "🔖tag:",
    description: "Select when creating a new tag for a release or version.",
  },
  {
    emoji: "🌱seed:",
    description: "Select when adding or updating seed files on a project.",
  },
  {
    emoji: "✅pass:",
    description: "Select when commit passes all tests.",
  },
  {
    emoji: "🔥remove:",
    description: "Select when removing code or files.",
  },
  {
    emoji: "🚨warning:",
    description:
      "Select when fixing a warning. e.g. a lint or compiler warnings.",
  },
  {
    emoji: "✏️typo:",
    description: "Select when fixing a typo.",
  },
  {
    emoji: "💩poop:",
    description: "Select when writing a bad code needs to be improved.",
  },
  {
    emoji: "👽api:",
    description: "Select when adding or updating APIs.",
  },
  {
    emoji: "🚚resources:",
    description:
      "Select when adding or updating resources and their paths, routes, etc. e.g. move or rename files or paths.",
  },
  {
    emoji: "🗃️database:",
    description:
      "Select when adding or updating database and it's related stuff.",
  },
  {
    emoji: "⚰️dead:",
    description: "Select when removing dead code.",
  },
  {
    emoji: "👔business:",
    description: "Select when adding or updating business logic.",
  },
  {
    emoji: "💸monetize:",
    description:
      "Select when adding or updating sponsorships or monetization logic. e.g. ads, affiliate links, etc.",
  },
  {
    emoji: "🦺safety:",
    description:
      "Select when adding or updating validation or safety related code. e.g. security checks, validation, error handling, and etc. ",
  },
];
export default EmojiLog;
