module.exports = {

    before : function(browser) {
        console.log('Starting test...');
    },

    after : function(browser) {
        console.log('COMPLETED');
        browser.end();
    },

    'step one: navigate' : function (browser) {
        let chartPage = browser.page.chartPage();
        chartPage
            .navigate();
      },

    'Test chart': (browser) => {
        browser
            .pause(3000)
            .assert.screenshotIdenticalToBaseline('#chartdiv')
            .end()
    }
};