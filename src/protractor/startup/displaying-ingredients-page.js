describe('Displaying Ingredients page testing: ', function(){
    describe('When the user clicks Add Ingredients', function(){
        it('Should have the Ingredients page displayed', function(){
            browser.get('http://localhost:8100/');
            var ingredientsButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-home/ion-content/div[2]/div[2]/div[2]/button[1]'));
            ingredientsButton.click();
            browser.waitForAngular();
            var pageHeader = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-ingredients/ion-header/ion-navbar/div[2]/ion-title/div')); 
            expect(pageHeader.getText()).toMatch('Add your ingredients');
        });
    });
});