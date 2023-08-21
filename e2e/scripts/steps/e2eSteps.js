"use strict";

const {Given, When, Then} = require("@cucumber/cucumber");

const e2ePage = require("../pages/e2ePage");

Given('I am on the site window', async function () {
    await e2ePage.navigateToSite();
});

When('I click on a link', async function () {
    await e2ePage.clickOnALink();
});

Then('I text should be found on the page', async function () {
    await e2ePage.assertAText();
});
