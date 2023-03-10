// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// `.env.ts` is generated by the `npm run env` command
//import env from './.env';

export const environment = {
  production: false,
  version: 1 + '-dev',
  serverUrl: 'https://accelerator-dev.tigeranalytics.com/RTMFastBackend/',
  liveUrl: 'https://accelerator-dev.tigeranalytics.com/RTMFastBackend/',
  reportPath: 'https://accelerator-dev.tigeranalytics.com/RTMFastBackend/report/',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR']
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
