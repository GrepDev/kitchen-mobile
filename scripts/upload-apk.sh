#!/bin/bash

mkdir $HOME/build/GrepDev/kitchen-mobile/buildApk/
cp -R $HOME/build/GrepDev/kitchen-mobile/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $HOME/build/GrepDev/kitchen-mobile/buildApk
cd $HOME
git config --global user.email "laurentiu.raducu@gmail.com"
git config --global user.name "LaurentiuGabriel"
git clone --quiet --branch="feature/travis-deploy" git@github.com:GrepDev/kitchen-mobile.git
ls -l
cd kitchen-mobile 
cp $HOME/build/GrepDev/kitchen-mobile/buildApk .
git checkout --orphan temporary
git add --all .
git commit -am "[Auto] Update Test Apk ($(date +%Y-%m-%d.%H:%M:%S))"
git branch -D feature/travis-deploy
git branch -m feature/travis-deploy
git push origin feature/travis-deploy --force --quite > /dev/null
