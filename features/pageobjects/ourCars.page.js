//const { default: $ } = require('webdriverio/build/commands/browser/$');
const Page = require('./page');

class OurCarsPage extends Page {

//Collect the elements from Homepage
  
    get ourCarsPageLink() {
        return $('button[id="nav:topNavCarMenu"]');
    }

    get hybridElement() {
        return $('button[id="site-nav-cars-menu-section-tab-0"]');
    }

    get suvsXC90(){
        return $('img[src="https://www.volvocars.com/images/site-navigation/2022/xc90-hybrid.png"]');
    }

    get suvsXC60(){
        return $('img[src="https://www.volvocars.com/images/site-navigation/2022/xc60-hybrid.png"]');
    }

    get suvsXC40(){
        return $('img[src="https://www.volvocars.com/images/site-navigation/2022/xc40-hybrid.png"]');
    }

    get suv4thModel(){
        return $('//*[@id="site-nav-cars-menu-section-panel-1"]/div/div[4]/a/div/div/div[1]');
    }
 
 //Actions

    async clickOurCarsPageLink() {
        await this.ourCarsPageLink.click();
        console.log("Our cars page link is clicked");
    }

    async clickhybdrid() {
        await this.hybridElement.click();
        console.log("hybrid element link is clicked");
    }

    open() {
        return super.open();
    }
}

module.exports = new OurCarsPage();