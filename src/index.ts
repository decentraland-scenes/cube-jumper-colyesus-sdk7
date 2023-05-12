import 'core-js/features/url'
import { timers } from '@dcl-sdk/utils'

Object.assign(globalThis, {
  FormData: class FormData {},
  clearTimeout: timers.clearTimeout,
  setTimeout: timers.setTimeout
})

// Import Decentraland Builder code.
import "./scene";

// Import the custom gameplay code.
import "./gameplay";

// export all the functions required to make the scene work
export * from '@dcl/sdk'
