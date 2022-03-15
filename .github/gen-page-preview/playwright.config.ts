import { PlaywrightTestConfig } from "@playwright/test";
const config: PlaywrightTestConfig = {
  webServer: {
    command: "yarn start",
    cwd: process.env.GITHUB_WORKSPACE,
    port: 3000,
  },
  timeout: 0
};
export default config;
