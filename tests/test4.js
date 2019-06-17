module.exports = {
    before : function(browser) {
        console.log('Starting test...');
    },

    after : function(browser) {
        console.log('COMPLETED');
        browser.end();
    },

    'step one: navigate' : function (browser) {
        let svgPage = browser.page.svgPage();
        svgPage
            .navigate();
        browser
            .frame("result")
            .waitForElementVisible('.buttons');
      },

    'step two: verify chart' : function (browser) {
        let svgPage = browser.page.svgPage();
        try {
            svgPage.click("@northAmerica")
                .expect.element("@chart").to.have.css("stroke-dasharray").which.equals(browser.globals.chartValues.northAmerica);
            svgPage.click("@southAmerica")
                .expect.element("@chart").to.have.css("stroke-dasharray").which.equals(browser.globals.chartValues.southAmerica);
            svgPage.click("@oceania")
                .expect.element("@chart").to.have.css("stroke-dasharray").which.equals(browser.globals.chartValues.oceania);
            svgPage.click("@africa")
                .expect.element("@chart").to.have.css("stroke-dasharray").which.equals(browser.globals.chartValues.africa);
            svgPage.click("@europe")
                .expect.element("@chart").to.have.css("stroke-dasharray").which.equals(browser.globals.chartValues.europe);
            svgPage.click("@asia")
                .expect.element("@chart").to.have.css("stroke-dasharray").which.equals(browser.globals.chartValues.asia);
        } catch (err) {
            console.log(err);
        }

      }
};