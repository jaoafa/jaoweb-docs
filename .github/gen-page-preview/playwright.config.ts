import { PlaywrightTestConfig } from '@playwright/test'
const config: PlaywrightTestConfig = {
  webServer: {
    command: 'yarn build && yarn generate && yarn start',
    port: 3000,
  },
}
export default config
