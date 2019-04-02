describe('Viewing Recipes page: ', function(){
    describe('When the user clicks Get Recipes on the main page', function(){
        it('Should have the Recipes page displayed', function(){
            browser.get('http://localhost:8100/');
            var recipesButton = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-home/ion-content/div[2]/div[2]/div[2]/button[2]'));
            recipesButton.click();
            browser.waitForAngular();
            var pageHeader = element(by.xpath('/html/body/ion-app/ng-component/ion-nav/page-recipes/ion-header/ion-navbar/div[2]/ion-title/div')); 
            expect(pageHeader.getText()).toMatch('search for recipes');
        });
    });
});