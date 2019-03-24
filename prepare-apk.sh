mv /home/travis/build/GrepDev/kitchen-mobile/my-release-key.keystore /home/travis/build/GrepDev/kitchen-mobile/platforms/android/app/build/outputs/apk/release/
cd /home/travis/build/GrepDev/kitchen-mobile/platforms/android/app/build/outputs/apk/release/
mv app-release-unsigned.apk edesia.apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore edesia.apk app-release <<!
$PASSPHRASE
$PASSPHRASE
!
