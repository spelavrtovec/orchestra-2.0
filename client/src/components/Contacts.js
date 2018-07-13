import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
        <p className="line1">O r c h e s t r a&emsp;A M A D E O</p>
        <p className="line2">Music and Culture Non-Profit Association</p>
        <img src="" id="logo1" alt="" />
        <SocialIcon
          url="https://www.instagram.com/amadeoorchestra/"
          network="instagram"
        />
        <SocialIcon
          url="https://www.facebook.com/orkesteramadeo/"
          network="facebook"
        />
        <SocialIcon
          url="https://twitter.com/AmadeoOrchestra"
          network="twitter"
        />
        <p className="line3">Ljubljana | SLOVENIA</p>
        <p className="line4">
          <span className="one">Tel.</span> +386 31 636 167
        </p>
        <p className="line5">
          <span className="one">E-mail</span> amadeoorchestra@gmail.com
        </p>
      </div>
    );
  }
}

export default Contacts;
