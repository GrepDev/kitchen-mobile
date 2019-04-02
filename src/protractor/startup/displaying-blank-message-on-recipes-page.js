describe('Displaying Ingredients page testing: ', function(){
    describe('When the user clicks Get Recipes', function(){
        it('Should have the Recipes page displayed', function(){
            browser.get('http://localhost:8100/');
            var recipesButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-home/ion-content/div[2]/div[2]/div[2]/button[2]'));
            recipesButton.click();
            browser.waitForAngular();
            var pageHeader = element(by.id('defaultList')); 
            expect(pageHeader.getText())
            .toMatch('You currently don\'t have any recipes added.');
        });
    });
});