"use strict";

const
    protractor = require("protractor"),
    browser = protractor.browser,
    driver = browser.driver,
    url = process.env.E2E_FRONTEND_URL,
    utils = require('../general/utils');

module.exports = {
    navigateToSite,
    clickOnALink,
    assertAText,
}

async function navigateToSite() {
    await driver.get(url);
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false);
    browser.sleep(3000);
}

async function clickOnALink() {
    let el = "[href='\\/qa']";
    await utils.elementClick(el);
}

async function assertAText() {
    let el = "[data-group-id='100-qa-automated-testing\\:frontend-automation\\:basic-introduction\\:html-css-javascript'] rect",
        value = "HTML, CSS, JavaScript";
        await browser.waitForAngularEnabled(false);
        await utils.assertText(el, value);
}
