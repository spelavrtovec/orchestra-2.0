import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Image } from "react-bootstrap";
import z from "../images/z.png";

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
      <Image src={z} className="image-Contacts-one"/>
      <div className="second-Contacts">
      <p class="line1">O r c h e s t r a&emsp;A M A D E O</p>
		<p class="line2">Music and Culture Non-Profit Association</p>
        <Image src="" id="logo1" alt="" />
        <div className="social-icons">
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
        </div>
        <p class="line3">Ljubljana | SLOVENIA</p>
		<p class="line4"><span class="one">Tel.</span> +386 31 636 167</p>
		<p class="line5"><span class="one">E-mail</span> amadeoorchestra@gmail.com</p>
        </div>
      </div>
    );
  }
}

export default Contacts;
