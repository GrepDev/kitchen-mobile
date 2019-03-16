#!/bin/bash

mkdir $HOME/buildApk/
ls -l
cp -R $HOME/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $HOME/android/
cd $HOME
echo $HOME
git config --global user.email "laurentiu.raducu@gmail.com"
git config --global user.name "LaurentiuGabriel"
git clone --quiet --branch "feature/travis-deploy" = https:/GrepDev:4b44633443ddf9bf2b63c7eb8335ff7faa836c1a@github.com/GrepDev/kitchen-mobile feature/travis-deploy > /dev/null
git checkout --orphan temporary
git add --all .
git commit -am "[Auto] Update Test Apk ($(date +%Y-%m-%d.%H:%M:%S))"
git branch -D feature/travis-deploy
git branch -m feature/travis-deploy
git push origin feature/travis-deploy --force --quite > /dev/null
echo -e "Done \n"
