import { join } from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  base: "/algorithm/",
  root: join(__dirname, "docs"),
  title: "Algorithm",
  description: "阿呆的算法之旅",
  icon: "/icon.png",
  logo: "/logo.png",
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/AlbertLin0923/algorithm",
      },
    ],
    lastUpdated: true,
    footer: {
      message: "Open-source MIT Licensed | Copyright © 2022-present AlbertLin",
    },
  },
});
