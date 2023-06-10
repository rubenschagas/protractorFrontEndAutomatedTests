"use strict";

const
    protractor = require("protractor"),
    element = protractor.element,
    browser = protractor.browser,
    driver = browser.driver,
    url = process.env.E2E_FRONTEND_URL,
    {by} = require("protractor"),
    scroll = require("../general/scroll"),
    utils = require('../general/utils');

module.exports = {
    navigateToSite,
    clickOnALink,
    assertAText,
}

async function navigateToSite() {
    await driver.get(url);
}

async function clickOnALink() {
    let el = scroll.toElement(element(by.css("[href='\\/qa']")));
    await utils.elementClick(el);
}

async function assertAText() {
    let el = "[data-group-id='100-qa-automated-testing\\:frontend-automation\\:basic-introduction\\:html-css-javascript'] rect",
        value = "HTML, CSS, JavaScript";
    await utils.assertTextFieldContent(el, value);
}
