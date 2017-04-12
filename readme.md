## Intro
As simple as possible boilerplate app for tizen web project (wearable or mobile).

## Preconditions 
1. Install [TizenStudio](https://developer.tizen.org/development/tizen-studio/download)
1. You will need: 
* `sdb` from `<TIZEN-STUIDO-PATH>/tools/`
* `tizen` from `<TIZEN-STUIDO-PATH>/tools/ide/bin/`.
1. Setup your security profile(s). 
   You will need to use IDE for that: `Tools -> Certyfication Manager`.
1. Set your `profile.xml`'s location (it should contains security profiles information). 

```shell
tizen cli-config -g default.profiles.path=<PATH>/profiles.xml
```

## Project setup
1. Update the config section of your `package.json` file. Ex:
```json
  "config": {
      "target": "0000c6410000a200",
      "profileName": "all-devices",
      "package": "iigrT5c0NH",
      "appName": "SampleName"
  }
```
- `target` device on which you will deploy final app. It can be get from `sdb`:
 ```shell
 # sdb devices
 List of devices attached 
 0000c6410000a200        device          SM-Z300H
 ```
-  `profileName` security profile from your `profiles.xml` file,
-   application `package` id from defined in `static/config.xml`,
-   `appName` from `static/config.xml`.
1. You may also update your application config template file located at `static/config.xml` 
just stick to the [tizen guidelines](https://developer.tizen.org/development/training/web-application/application-development-process/setting-project-properties)

## Usage
- `npm i` - don't forget,
- `npm run build` - creates app build at `build` dir,
- `npm run package` - creates `<APP_NAME>.wgt` file at `build`,
- `npm run deploy` - install and run an app on the target device.

## Licence
MIT