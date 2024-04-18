import { defineConfig } from "tsup";
import pkg from "./package.json";
import { getTsupOptions } from "./src/config";

const universalOptions = getTsupOptions(pkg, {
  tsupOptions: {
    target: "node20",
    format: ["cjs", "esm"],
    entry: [
      "src/index.ts",
      "src/copyDir.ts",
      "src/emptyDir.ts",
      "src/findNearestFile.ts",
      "src/getDataPath.ts",
      "src/isFileReadable.ts",
      "src/isStream/index.ts",
      "src/mergeStreams/index.ts",
      "src/readFile/index.ts",
      "src/getAppVersion.ts",
      "src/getCurrentGitBranch.ts",
      "src/getGitLastCommitHash.ts",
      "src/getGitTags.ts",
      "src/getLastGitTags.ts",
      "src/mergeStreams.ts",
      "src/writeFile.ts",
    ],
  },
});

export default defineConfig([universalOptions]);