module.exports = {
  url: "http://rpachallenge.com/",
  sections: {
    start: {
      selector: ".container-fluid",
      elements: {
          startButton: {
            selector: '//button[@id="start"]',
            locateStrategy: 'xpath'
          }
      }
    },
    fields: {
        selector: "#randomForm",
        elements: {
            firstName: {
              selector: '//div[label[text()="First Name"]]/input',
              locateStrategy: 'xpath'
            },
            lastName: {
              selector: '//div[label[text()="Last Name"]]/input',
              locateStrategy: 'xpath'
            },
            email: {
              selector: '//div[label[text()="Email"]]/input',
              locateStrategy: 'xpath'
            },
            phoneNumber: {
              selector: '//div[label[text()="Phone Number"]]/input',
              locateStrategy: 'xpath'
            },
            companyName: {
              selector: '//div[label[text()="Company Name"]]/input',
              locateStrategy: 'xpath'
            },
            address: {
              selector: '//div[label[text()="Address"]]/input',
              locateStrategy: 'xpath'
            },
            roleInCompany: {
              selector: '//div[label[text()="Role in Company"]]/input',
              locateStrategy: 'xpath'
            },
            submit: {
              selector: '//input[@type="submit"]',
              locateStrategy: 'xpath'
            }
        }
    },
    finish: {
        selector: ".success-container",
        elements: {
            result: {
              selector: '//strong[@class="success-score"]',
              locateStrategy: 'xpath'
            }
        }
    }
  }
};