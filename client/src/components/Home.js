import React, { Component } from "react";
import d from "../images/d.jpg";
import { Image } from "react-bootstrap";
import { Parallax, ParallaxLayer } from "react-spring";
import Contacts from './Contacts';
import Gallery from './Gallery';
import Association from './Association';
import Projects from './Projects';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Parallax
          pages={5}
          scrolling={true}
          vertical
          ref={ref => (this.parallax = ref)}>

          <ParallaxLayer offset={0} speed={0.5} factor={0.8}>
            <div className="home-flex-container">
              <Image src={d} responsive className="home-image" />
              <h1 className="home-hero">ORCHESTRA AMADEO</h1>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <Contacts></Contacts>
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.5}>
           <Gallery></Gallery>
          </ParallaxLayer>

           <ParallaxLayer offset={3} speed={0.5}>
           <Association></Association>
          </ParallaxLayer>

           <ParallaxLayer offset={4} speed={0.5}>
           <Projects></Projects>
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default Home;
