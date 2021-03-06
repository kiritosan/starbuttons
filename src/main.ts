import App from './App.svelte'
import config, { testingConfig } from './config'
import initi18n from './utils/i18n'
import * as Sentry from '@sentry/browser'

initi18n()

Sentry.init({
  dsn:
    'https://fea8a42155df4851b95de0a8de86cb17@o407537.ingest.sentry.io/5276695',
  release: 'NULL_RELEASE',
})

const app = new App({
  target: document.body,
  props: {
    siteConfig: config,
    testingConfig,
  },
})

export default app
