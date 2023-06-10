"use strict";

const
    protractor = require("protractor"),
    element = protractor.element,
    browser = protractor.browser,
    {by} = require("protractor");
/**
 *
 * @param el1
 * @return {PromiseLike<void>}
 */
exports.elementClick = async function (el1) {
    return await elementClickBy(by.css(el1));
};

/**
 *
 * @param byLocator
 * @return {PromiseLike<void>}
 */
async function elementClickBy(byLocator) {
    let el = element(byLocator);
    await browser.waitForAngular();
    await browser.wait(protractor.ExpectedConditions.elementToBeClickable(el), 60 * 1000);
    await el.click();
}

/**
 * Check the value of an element
 *
 * @param {string} el: el to be checked.
 * @param {string} content: valeu to be checked.
 * @return {promise.Promise<string>}
 */
exports.assertText = async function (el, content) {
    const _el = element(by.css(el));
    _el.getText().then(function (elContent) {
        if (elContent !== content) {
            throw new Error("Error! The text found (" + elContent + ") is not equals to the value (" + content + "). Selector: " + el);
        }
    });
};
