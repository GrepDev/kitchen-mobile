describe('Adding ingredients testing: ', function(){
    describe('When the user clicks Add Ingredients on the Ingredients page', function(){
        it('Should have the ingredients displayed on the page', function(){
            browser.get('http://localhost:8100/');
            var ingredientsButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-home/ion-content/div[2]/div[2]/div[2]/button[1]'));
            ingredientsButton.click();
            browser.waitForAngular();
            element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-ingredients/ion-content/div[2]/ion-toolbar/div[2]/ion-searchbar/div/input')).sendKeys("Apple");
            var searchButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-ingredients/ion-content/div[2]/button'));
            searchButton.click();     
            browser.wait(ExpectedConditions.visibilityOf(element(by.id('ingredientsContainer'))), 5000);
            var firstIngredient = element(by.xpath('//*[@id="ingredientsContainer"]/ion-list/ion-item-sliding/ion-item/div[1]/div/ion-label'));
            expect(firstIngredient.getText()).toMatch('Apples, raw, with skin');
        });
    });
});