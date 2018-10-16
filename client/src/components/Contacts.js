import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";

class Contacts extends Component {
  render() {
    return (
      <div className="Contacts">
        <div className="contacts-container">
          <p>Music and Culture Non-Profit Association</p>
          <hr></hr>
          <p>Ljubljana <span className="bolder">|</span> SLOVENIA</p>
          <p><span className="bolder">Tel.</span> +386 31 636 167</p>
          <p><span className="bolder">E-mail</span> amadeoorchestra@gmail.com</p>
          <hr></hr>
          <div className="social-icons">
            <SocialIcon
              url="https://www.instagram.com/amadeoorchestra/"
              network="instagram"
              className="icon"
            />
            <SocialIcon
              url="https://www.facebook.com/orkesteramadeo/"
              network="facebook"
              className="icon"
            />
            <SocialIcon
              url="https://twitter.com/AmadeoOrchestra"
              network="twitter"
              className="icon"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
