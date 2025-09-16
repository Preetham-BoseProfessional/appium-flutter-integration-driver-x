export const desiredCapConstraints = {
   avd: {
      isString: true,
   },
   automationName: {
      isString: true,
      presence: true,
   },
   platformName: {
      inclusionCaseInsensitive: ['iOS', 'Android', 'Windows', 'Mac'],
      isString: true,
      presence: true,
   },
   udid: {
      isString: true,
   },
   launchTimeout: {
      isNumber: true,
   },
   flutterServerLaunchTimeout: {
      isNumber: true,
   },
   flutterSystemPort: {
      isNumber: true,
   },
   address: {
      isString: true,
   },
   packageName: {
      isString:true,
   },
} as const;
