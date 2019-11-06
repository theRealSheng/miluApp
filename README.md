
### Preparing (Instructions are given for mac OS)
Please run command npm install at the root folder

Kindly check https://facebook.github.io/react-native/docs/getting-started for initial set up.

## Android Project
1) If you do not have homebrew install, please enter following command in terminal.
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2)brew cask install android-platform-tools
3) check devices adb devices

To Run Android, please run in terminal react-native run-android

## IOS
Please make sure you have the emulators or devices ready to run the app.

With the terminal, from rootfolder:
1) cd ios 
2) run commmand: pod install

To Run on IOS, from rootfolder, access the ios folder, and open file .xcworkspace

### Error Handler
RN >= 0.50 -  watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* && rm -rf node_modules/ && npm cache clean && npm install && npm start -- --reset-cache

npm >= 5 - watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache

Windows - del %appdata%\Temp\react-native-* & cd android & gradlew clean & cd .. & del node_modules/ & npm cache clean --force & npm install & npm start -- --reset-cache

### Please note
 - Bottom navigation tabs 3,4,and 5 are reproducing is the same navigation stack as the home tab.
 - Please run app without debbuger or it might slow the app.
 - Video has basic controls. In Iphone, you will not be able to exit until the video is finished.