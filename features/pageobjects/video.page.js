const resemble = require('node-resemble-js');
const Page = require('./page');

class VideoPage extends Page {

    //Collect the elements from Homepage

    get videoLink() {
        return $('button[class="ac ae ag aw cd ce cg ch ci cn di dj dk dl dm dn do dp dq dr ds dt du dv dw dx dy dz ea eb ec ed ee ef eg eh ei ej ek el em en eo ep eq m"]');
        }
   /* 
    get videoattr(){
           //Switch to iframe
        const videoIframe = $("//*[@id='Video-1']/section/div/iframe"); 
        browser.switchToFrame(videoIframe);

         //Pause video
        return $("//*[@id='movie_player']/div[29]/div[2]/div[1]/button");
       }
*/

    //Actions

    async clickVideoLink(){
        await this.videoLink.click();
        console.log("Video link is clicked");
    }
/*
    async clickPlaypause(){
        await this.videoattr.click();

    }
*/
}

module.exports = new VideoPage();