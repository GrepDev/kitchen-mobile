describe('Startup testing: ', function(){
    describe('When the site loads up', function(){
        it('Should have all images loaded', function(){
            browser.ignoreSynchronization = true;
            browser.get('http://localhost:8100');
            browser.waitForAngular();
            browser.executeAsyncScript(function (callback) {
                var imgs = document.getElementsByTagName('img'),
                    loaded = 0;
                for (var i = 0; i < imgs.length; i++) {
                    if (imgs[i].naturalWidth > 0) {
                        loaded = loaded + 1;
                    };
                };
                callback(imgs.length - loaded);
     }).then(function (brokenImagesCount) {
        expect(brokenImagesCount).toBe(0);
            });
        });
    });
});
