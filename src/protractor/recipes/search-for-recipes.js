describe('Adding Recipes: ', function(){
    describe('When the user clicks Add Recipes', function(){
        it('Should have some recipes added based on the ingredients', function(){
            browser.get('http://localhost:8100/');
            var recipesButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-home/ion-content/div[2]/div[2]/div[2]/button[2]'));
            recipesButton.click();
            browser.waitForAngular();
            var addRecipesButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-recipes/ion-content/div[2]/button'));
            browser.executeScript("arguments[0].click()", addRecipesButton);            
            browser.wait(ExpectedConditions.visibilityOf(element(by.id('recipesContainer'))), 5000);
        });
    });
});