describe('Adding ingredients testing: ', function(){
    describe('When the user clicks Add Ingredients on the Ingredients page', function(){
        it('Should have the ingredients displayed on the page even if he navigates on another page', function(){
            browser.get('http://localhost:8100/');
            browser.waitForAngular();
            var ingredientsButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-home/ion-content/div[2]/div[2]/div[2]/button[1]'));
            ingredientsButton.click();
            browser.waitForAngular();
            
            var pageHeader = element(by.xpath('//*[@id="defaultList"]')); 
            expect(pageHeader.getText())
            .toMatch('You currently don\'t have any ingredient added. You can either search for the ingredients that you have in your kitchen, or those that you want to use in your recipe.');
            
            var searchBox = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-ingredients/ion-content/div[2]/ion-toolbar/div[2]/ion-searchbar/div/input'));
            searchBox.sendKeys('Apple');
            var searchButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-ingredients/ion-content/div[2]/button/span'));
            searchButton.click();
            browser.wait(ExpectedConditions.visibilityOf(element(by.id('ingredientsContainer'))), 5000);
            var firstIngredient = element(by.xpath('//*[@id="ingredientsContainer"]/ion-list/ion-item-sliding/ion-item/div[1]/div/ion-label'));
            expect(firstIngredient.getText())
            .toMatch('Apples, canned, sweetened, sliced, drained, heated');
            
            var backButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-ingredients/ion-header/ion-navbar/button'));
            browser.executeScript("arguments[0].click()", backButton); 
            browser.waitForAngular();
            browser.executeScript("arguments[0].click()", ingredientsButton); 
            browser.waitForAngular();
            expect(firstIngredient.getText())
            .toMatch('Apples, canned, sweetened, sliced, drained, heated');
        });
    });
});