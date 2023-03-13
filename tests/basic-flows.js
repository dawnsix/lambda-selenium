import 'chromedriver';
import { Builder, By } from 'selenium-webdriver';
import { assert } from 'chai';

import LandingPage from '../pages/landingPage.js';
import LoginPage from '../pages/loginPage.js';

import { data } from '../data/environment.js';
import { caps } from '../conf/parallel.conf.js';
import * as dotenv from 'dotenv'

dotenv.config()

var buildDriver = function(xx) {
return new Builder()
    .usingServer(
        "http://" +
        process.env.LT_USERNAME + ":" +
        process.env.LT_ACCESS_KEY +
        "@hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(xx)
    .build();
};

var driver, landingPage, loginPage;

caps.forEach(function(cap) {

    console.log("running " + cap.browserName)

    describe("basic", async function() {

        beforeEach(async function() {
            cap.name = this.currentTest.title;
            driver = buildDriver(cap);
        
            landingPage = new LandingPage(driver);
            loginPage = new LoginPage(driver);
        });
        
        afterEach(function(done) {
            if (this.currentTest.isPassed()) {
              driver.executeScript("lambda-status=passed");
            } else {
              driver.executeScript("lambda-status=failed");
            }
            driver.quit().then(function() {
              done();
            });
        });

        this.timeout(0);
    
        it('navigate to posts', async function() {
            
            await landingPage.navigateToPage();
            var landingText = await driver.findElement(By.id('hp-hdr')).getText();
            assert.equal(landingText, 'Welcome to PaidRaid');

            await landingPage.clickPosts();
        });

        it('user login', async function() {
            
            await landingPage.navigateToPage();
            await landingPage.clickLogin();
            await loginPage.loginUser(data.email, data.password);
            
            let banner = await landingPage.getWelcomeBanner();
            assert.include(banner, data.username);
        });
    });
});