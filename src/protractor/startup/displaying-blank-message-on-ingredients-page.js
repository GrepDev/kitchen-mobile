describe('Displaying Ingredients page testing: ', function(){
    describe('When the user clicks Add Ingredients', function(){
        it('Should have the Ingredients page displayed', function(){
            browser.get('http://localhost:8100/');
            var ingredientsButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-home/ion-content/div[2]/div[2]/div[2]/button[1]'));
            ingredientsButton.click();
            browser.waitForAngular();
            var pageHeader = element(by.xpath('//*[@id="defaultList"]')); 
            expect(pageHeader.getText())
            .toMatch('You currently don\'t have any ingredient added. You can either search for the ingredients that you have in your kitchen, or those that you want to use in your recipe.');
        });
    });
});