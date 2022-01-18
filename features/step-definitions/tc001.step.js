const { Given, When, Then } = require('@wdio/cucumber-framework');
//const { assert } = require('chai');
const HomePage = require ('../pageobjects/home.page');
const OurCarsPage = require('../pageobjects/ourCars.page');
const VideoPage = require('../pageobjects/video.page')
//var chai = require('chai');
//var assert = chai.assert;
let chai = require("chai");
const { videoattr } = require('../pageobjects/video.page');
//const { videoattr } = require('../pageobjects/video.page');
//const { expect } = require('chai');
let assert = chai.assert;
//const resemble = require('node-resemble-js');

Given(/^the start page is the homepage$/, async () => {

    await HomePage.open();
    await HomePage.clickAcceptCookies();
    await expect(HomePage.homeTitle).toBeExisting();
    await expect(OurCarsPage.ourCarsPageLink).toBeExisting();

});

When(/^the Ourcars link is clicked on the top right corner$/, async () => {

    await OurCarsPage.clickOurCarsPageLink();
    await expect(OurCarsPage.hybridElement).toBeExisting();
   
});

Then(/^the Hybrid categories of vehicle are present$/, async () => {

    await OurCarsPage.clickhybdrid();
    //await expect(OurCarsPage.suvsXC40).toBeExisting();
    assert.equal(true,await OurCarsPage.suvsXC40.isExisting());
    //await expect(OurCarsPage.suvsXC40Txt).toHaveTextContaining(Vehicle3);
    //await expect(OurCarsPage.suvsXC60).toBeExisting();
    assert.equal(true,await OurCarsPage.suvsXC60.isExisting())
    //await expect(OurCarsPage.suvsXC60Txt).toHaveTextContaining(Vehicle2);
    //await expect(OurCarsPage.suvsXC90).toBeExisting();
    assert.equal(true,await OurCarsPage.suvsXC90.isExisting())
    //await expect(OurCarsPage.suvsXC90Txt).toHaveTextContaining(Vehicle1);
});

Given(/^Homepage is launched$/, async () => {

    await OurCarsPage.clickOurCarsPageLink();

});

When(/^Click in Our Cars link$/, async () => {

    await OurCarsPage.clickOurCarsPageLink();
    await expect(OurCarsPage.hybridElement).toBeExisting();
   
});
Then(/^4th SUv model is not present$/, async () => {
    
    //let ele = await OurCarsPage.suv4thModel.isExisting()
    //let isExisting = await ele.isExisting()
    //assert.equal(false,ele)
    assert.equal(false,await OurCarsPage.suv4thModel.isExisting())
   
    
});

Given(/^the start page is  homepage$/, async () => {

    await OurCarsPage.clickOurCarsPageLink();

});

When(/^I click on the watch video link$/, async () => {

    await VideoPage.clickVideoLink();

});

Then(/^verify the video playing$/, async () => {

   /*//Switch to iframe to interact with video player
    //const videoIframe = $('#_hjRemoteVarsFrame')
    browser.switchToFrame($("//iframe[@src='https://www.youtube.com/embed/fj_WFwVOYn8?color=white&cc_load_policy=1&rel=0&autoplay=1&cc_lang_pref=en&hl=en']"))
    //browser.switchToFrame(videoIframe)

    //const player = $('#movie_player')

    // video is playing
    //expect(player).toHaveElementClass('A Million More - YouTube')

    // pause video
    const playPauseButton = $('button[class="ytp-play-button ytp-button"]')
    //expect(playPauseButton).toBeClickable()
    await playPauseButton.click()

    // video is paused
    expect(player).toHaveElementClass('paused-mode')

    // check current time
    expect($('.ytp-time-current')).toHaveTextContaining('0:52')

    browser.pause(2000)

    //Switch to iframe
   const videoIframe = $("//*[@id='Video-1']/section/div/iframe"); 
   browser.switchToFrame(videoIframe);

   //Pause video
   const playPauseButton = $("//*[@id='movie_player']/div[29]/div[2]/div[1]/button");
   await expect(playPauseButton).toBeExisting();
   await playPauseButton.click();

   browser.pause(2000) 
   
   await expect(VideoPage.videoattr).toBeExisting();
   await VideoPage.clickPlaypause();
*/
});