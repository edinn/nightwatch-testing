var path = require('path');

module.exports = {
    waitForConditionTimeout: 10000,
    successText: "Your success rate is 100.00%",
    chartValues: {
        northAmerica: "7.9px, 158px",
        southAmerica: "14.22px, 158px",
        oceania: "1.58px, 158px",
        africa: "23.7px, 158px",
        europe: "18.96px, 158px",
        asia: "94.8px, 158px"
    },
    "visual_regression_settings": {
        "generate_screenshot_path" : function (client, basePath, fileName) {
                                        const moduleName = client.currentTest.module,
                                            testName = client.currentTest.name
                                        return path.join(process.cwd(), basePath, moduleName, testName, fileName)
                                      },
        "latest_screenshots_path": "vrt/latest",
        "latest_suffix": "",
        "baseline_screenshots_path": "vrt/baseline",
        "baseline_suffix": "",
        "diff_screenshots_path": "vrt/diff",
        "diff_suffix": "",
        "threshold": 0,
        "prompt": false,
        "always_save_diff_screenshot": false
    }
};