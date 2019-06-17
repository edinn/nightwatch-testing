module.exports = {
    url: "https://codepen.io/team/css-tricks/pen/77040610b66e6aa0d0fb87022c524194",
    elements: {
        chart: {
              selector: '.pie'
        },
        asia: {
          selector: '//button[@data-name="asia"]',
          locateStrategy: 'xpath'
        },
        northAmerica: {
          selector: '//button[@data-name="northAmerica"]',
          locateStrategy: 'xpath'
        },
        southAmerica: {
          selector: '//button[@data-name="southAmerica"]',
          locateStrategy: 'xpath'
        },
        oceania: {
          selector: '//button[@data-name="oceania"]',
          locateStrategy: 'xpath'
        },
        africa: {
          selector: '//button[@data-name="africa"]',
          locateStrategy: 'xpath'
        },
        europe: {
          selector: '//button[@data-name="europe"]',
          locateStrategy: 'xpath'
        }
    }
};