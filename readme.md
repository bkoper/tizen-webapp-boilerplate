## Intro
As simple as possible boilerplate app for tizen web project (wearable or mobile).

## Preconditions 
1. Install [TizenStudio](https://developer.tizen.org/development/tizen-studio/download)
You will need: 
* `sdb` from `<TIZEN-STUIDO-PATH>/tools/`
* `tizen` from `<TIZEN-STUIDO-PATH>/tools/ide/bin/`.
2. Setup your security profile(s). 
   You will need to use IDE for that: `Tools -> Certyfication Manager`.

   [Flow Samsung's instruction](https://developer.samsung.com/z/develop/getting-certificates/create)
2. Go to `Device Manager`, select device and select `Permit to install applications`

## Project setup
Update the config section of your `package.json` file. Ex:
```json
  "config": {
      "target": "0000c6410000a200",
      "profileName": "all-devices",
      "package": "iigrT5c0NH",
      "appName": "SampleName"
  }
```
- connect device using `sdb`:
 ```shell
 # sdb connect 10.0.1.14
 # sdb devices
 List of devices attached 
 10.0.1.13:26101        device          SM-Z300H
 ```
-  `profileName` security profile from your `profiles.xml` file,
-   application `package` id,
-   `appName` from `static/config.xml`.

You may also update your application config template file located at `static/config.xml`
just stick to the [tizen guidelines](https://developer.tizen.org/development/training/web-application/application-development-process/setting-project-properties)

## Usage
- `yarn i` - don't forget,
- `yarn build` - creates app build at `build` dir,
- `yarn package` - creates `<APP_NAME>.wgt` file at `build`,
- `yarn deploy` - install and run an app on the target device.

## Licence
MIT
