cd /home/travis/build/GrepDev/kitchen-mobile/
webdriver-manager start &
sleep 1
echo Test Server has started
cd src/protractor
protractor conf.js
