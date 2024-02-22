import path from "path";
import { Env } from "./config/build/types";
import { buildWebpack } from "./config/build";

export default (env: Env) => {
  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: {
      htmlTemplatePath: path.resolve(__dirname, "public", "index.html"),
      outputPath: path.resolve(__dirname, "build"),
      entryPath: path.resolve(__dirname, "src", "index.tsx"),
      srcPath: path.resolve(__dirname, "src"),
      dataPath: path.resolve(__dirname, "public"),
    }
  });
};
