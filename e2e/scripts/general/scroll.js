"use strict";

let {browser} = require("protractor");

/**
 * Do a scroll on the page that makes an element visible
 *
 * @param {ElementFinder} element The element to be visible
 * */
exports.toElement = function (element) {
    return browser.executeAsyncScript(function (element, done) {
        /* globals window */
        if (element && element.getBoundingClientRect().top < 60) {
            window.scrollTo(0, 0);
            return setTimeout(done, 0);
        }
        done();
    }, element)
        .then(() => element);
};
