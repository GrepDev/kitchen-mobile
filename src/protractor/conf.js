exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['./startup/startup-testing.js',
            './startup/displaying-ingredients-page.js',
            './startup/displaying-blank-message-on-ingredients-page.js',
            './startup/displaying-blank-message-on-recipes-page.js',
            './ingredients/search-for-ingredients.js',
            './ingredients/add-second-ingredient.js',
            './ingredients/ingredients-persistence.js',
            './recipes/view-recipes-page.js',
            './recipes/search-for-recipes.js'],
    

capabilities: {
  browserName: 'chrome',
  pageLoadStrategy :'normal',
  chromeOptions: {
     args: [ "--headless", 
             "--disable-gpu", 
             "--window-size=800,600",
             "--debuggerAddress=127.0.0.1:12633" ]
   }
}, 
        
    onPrepare: function(){
        browser.driver.manage().window().setPosition(0,0);
        browser.driver.manage().window().setSize(1280,720);
    }
 }
