describe('Testing ingredients persistence: ', function(){
    describe('When the user clicks Add Ingredients on the Ingredients page', function(){
        it('Should have the ingredients added previously persistent in the ingredients list', function(){
            browser.get('http://localhost:8100/');
            var ingredientsButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-home/ion-content/div[2]/div[2]/div[2]/button[1]'));
            ingredientsButton.click();
            browser.waitForAngular();  
            var firstIngredient = element(by.xpath('//*[@id="ingredientsContainer"]/ion-list/ion-item-sliding/ion-item/div[1]/div/ion-label'));
            expect(firstIngredient.getText()).toMatch('Apples, raw, with skin');
            var secondIngredient = element(by.xpath('//*[@id="ingredientsContainer"]/ion-list/ion-item-sliding[2]/ion-item/div[1]/div/ion-label'));
            expect(secondIngredient.getText()).toMatch('Mangos, raw');
        });
    });
});