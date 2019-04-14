describe('Adding ingredients testing: ', function(){
    describe('When the user clicks Add Ingredients on the Ingredients page for the second time', function(){
        it('Should have two ingredients displayed on the page', function(){
            browser.get('http://localhost:8100/');
            var ingredientsButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-home/ion-content/div[2]/div[2]/div[2]/button[1]'));
            ingredientsButton.click();   
            browser.waitForAngular();
            element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-ingredients/ion-content/div[2]/ion-toolbar/div[2]/ion-searchbar/div/input')).sendKeys("Mango");
            var searchButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-ingredients/ion-content/div[2]/button'));
            browser.executeScript("arguments[0].click()", searchButton); 
            browser.sleep(5000);    
            var secondIngredient = element(by.xpath('//*[@id="ingredientsContainer"]/ion-list/ion-item-sliding[2]/ion-item/div[1]/div/ion-label'));
            expect(secondIngredient.getText()).toMatch('Mangos, raw');
        });
    });
});