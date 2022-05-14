# kitchen-mobile

This is a simple ionic app meant to take a list of ingredients and return a recipe. The app has been published under the name of Edesia - a Food App! on the Google Play store. A link to the app can be found here: https://play.google.com/store/apps/details?id=edesia.food.app&gl=US.

install ionic global
```
$ npm install -g ionic
```
clone repo
```
$ git clone https://github.com/GrepDev/kitchen-mobile.git
```
navigate to folder
```
$ cd kitchen-mobile
```
install dependencies
```
$ npm install
```
Start a local dev server for app dev/testing
```
$ ionic serve (normal mode)
$ ionic serve --l (lab mode - option to see multiple platforms at once.)
$ ionic serve -c (Print app console logs to Ionic CLI)
for more read https://ionicframework.com/docs/cli/serve/
``` 

## To run the app on device:
1. install DevApp from App store/Play store on your phone.
2. run ionic serve -c in the app of your choice on your computer and let it finish building. Next, open your iOS or Android device and connect to the same network as your computer (through wifi). Open the DevApp, and you should see your local app show up in the list.
