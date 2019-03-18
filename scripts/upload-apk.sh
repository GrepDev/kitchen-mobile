#!/bin/bash

mkdir $HOME/build/GrepDev/kitchen-mobile/buildApk/
cp -R $HOME/build/GrepDev/kitchen-mobile/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $HOME/build/GrepDev/kitchen-mobile/buildApk
cd $HOME
git config --global user.email "laurentiu.raducu@gmail.com"
git config --global user.name "LaurentiuGabriel"
git clone --quiet --branch=feature/travis-deploy https://LaurentiuGabriel:db3266e7123159bc9a5fcdd631dc068fd7d1157b@github.com/GrepDev/kitchen-mobile apk > /dev/null
ls -l
cd build/GrepDev/kitchen-mobile 
cp -R $HOME/build/GrepDev/kitchen-mobile/buildApk .
git checkout --orphan temporary
git add --all .
git commit -am "[Auto] Update Test Apk ($(date +%Y-%m-%d.%H:%M:%S))"
git branch -D feature/travis-deploy
git branch -b feature/travis-deploy
git push origin feature/travis-deploy --force --quiet > /dev/null
