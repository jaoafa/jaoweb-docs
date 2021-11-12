import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  webServer: {
    command: "yarn start",
    cwd: process.env.GITHUB_WORKSPACE,
    port: 3000,
  },
};
export default config;
