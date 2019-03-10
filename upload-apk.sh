mkdir $HOME/buildApk/
cp -R /media/laur/FD_BETA9SR2/Personal/Projects/Edesia/kitchen-mobile/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk $HOME/android/
cd $HOME
git config --global user.email "laurentiu.raducu@gmail.com"
git config --global user.name "LaurentiuGabriel"
git clone --quiet --branch "feature/travis-deploy" = https://LaurentiuGabriel:4b44633443ddf9bf2b63c7eb8335ff7faa836c1a@github.com/LaurentiuGabriel/kitchen-mobile feature/travis-deploy> /dev/null
cd feature/travis-deploy cp -Rf $HOME/android/*.
git add -f.
git remote add origin https://LaurentiuGabriel:4b44633443ddf9bf2b63c7eb8335ff7faa836c1a@github.com/LaurentiuGabriel/kitchen-mobile.git
git add -f.
git commit -m "Travis build pushed"
git push origin feature/travis-deploy -fq>/dev/null
echo -e "Done \n"
