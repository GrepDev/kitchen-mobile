exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./ingredients/search-for-ingredients.js',
            './startup/startup-testing.js',
            './startup/displaying-ingredients-page.js',
            './startup/displaying-blank-message-on-recipes-page.js',
            './recipes/view-recipes-page.js',
            './recipes/search-for-recipes.js'],
    

            // capabilities: {
            //     browserName: 'firefox'
            // },
            multiCapabilities: [
                {
                  browserName: 'firefox',
                  firefoxOptions: {
                    args: ['--headless']
                  },
                  'moz:firefoxOptions': {
                    args: [ '--headless' ]
                  }
                }
                ],

    onPrepare: function(){
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280,720);
    }
}
