
### Error Handler
RN >= 0.50 -  watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* && rm -rf node_modules/ && npm cache clean && npm install && npm start -- --reset-cache

npm >= 5 - watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules/ && npm cache verify && npm install && npm start -- --reset-cache

Windows - del %appdata%\Temp\react-native-* & cd android & gradlew clean & cd .. & del node_modules/ & npm cache clean --force & npm install & npm start -- --reset-cache

touch ~/.bash_profile
open ~/.bash_profile

### Preparing 


Android Project
adb - 
1) Need homebrew
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
2)brew cask install android-platform-tools
3) check devices adb devices

## IOS
With the terminal, from rootfolder, open the ios folder and run commmand: pod install