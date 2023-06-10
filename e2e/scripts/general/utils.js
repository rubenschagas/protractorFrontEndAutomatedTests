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
exports.elementClick = function (el1) {
    return elementClickBy(by.css(el1));
};

function elementClickBy(byLocator) {
    let el = element(byLocator);
    return browser.waitForAngular()
        .then(() => browser.wait(protractor.ExpectedConditions.elementToBeClickable(el), 60 * 1000))
        .then(() => el.click());
}

/**
 * Check the value of an element
 *
 * @param {string} textField: el to be checked.
 * @param {string} content: valeu to be checked.
 * @return {promise.Promise<string>}
 */
exports.assertTextFieldContent = function (textField, content) {
    return element(by.css(textField)).getAttribute("value")
        .then(function (elContent) {
            if (elContent !== content) {
                throw new Error("Error! The text found (" + elContent + ") is not equals to the value (" + content + "). Selector: " + textField);
            }
        });
};
