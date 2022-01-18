const Page = require('./page');

class HomePage extends Page {

    //Collect the elements from Homepage

    get acceptCookies() {
        return $('div[class="optanon-alert-box-button-middle accept-cookie-container"]');
    }

   get homeTitle() {
        return $('img[src="https://www.volvocars.com/static/shared/images/volvo-wordmark-black.svg"]');
   }

    //Actions

    async clickAcceptCookies() {
        await this.acceptCookies.click();
        console.log ("Accept cookies link is clicked");
    }

  
    open() {
        return super.open();
    }
}

module.exports = new HomePage();