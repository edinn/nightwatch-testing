var xlsx = require('xlsx');
var fs = require('fs');
if(typeof require !== 'undefined') XLSX = require('xlsx');
var workbook = XLSX.readFile('challenge.xlsx');
var sheetnamelist = workbook.SheetNames;

module.exports = {
    before : function(browser) {
        console.log('Starting test...');
    },

    after : function(browser) {
        console.log('COMPLETED');
        browser.end();
    },

    'step one: navigate and start' : function (browser) {
        let mainPage = browser.page.mainPage();
        mainPage
            .navigate();
        browser
            .waitForElementVisible('body')
        mainPage.section.start
            .click("@startButton");
      },

    'step two: fill data' : function (browser) {
        let xlsData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetnamelist[0]]);
                    var mainPage = browser.page.mainPage();
                    for (let i = 0; i < 10; i++) {
                    mainPage.section.fields.setValue("@firstName", xlsData[i]["First Name"])
                          .setValue("@lastName", xlsData[i]["Last Name "])
                          .setValue("@email", xlsData[i]["Email"])
                          .setValue("@phoneNumber", xlsData[i]["Phone Number"])
                          .setValue("@companyName", xlsData[i]["Company Name"])
                          .setValue("@address", xlsData[i]["Address"])
                          .setValue("@roleInCompany", xlsData[i]["Role in Company"])
                          .click("@submit");
                    }
      },
      'step three: verify success rate' : function (browser) {
            let mainPage = browser.page.mainPage();
            mainPage.section.finish
               .waitForElementVisible('@result')
               .expect.element('@result').text.to.contain(browser.globals.successText);
      },
};