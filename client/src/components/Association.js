import React, { Component } from "react";
import api from "../api";
import { Link } from "react-router-dom";
import j from "../images/j.jpg";
import { Image } from "react-bootstrap";

class Association extends Component {
  render() {
    return (
      <div className="Association">
        <p className="bigger">A B O U T</p>
        <div className="ml-2 text-justify">
          Chamber orchestra Amadeo was founded in Škofja Loka in 2013 and till
          present-day exists under artistic leadership and guidance of pianist
          and conductor Tilen Draksler. The main purpose of the orchestra is to
          recreate quality music of past and contemporary composers. It
          constantly seeks to redefine what is or what is not possible within
          musical performance in strong connection of nowadays much needed
          interdisciplinary artistic approach. With such programs they are
          trying to appeal to wider public as art and music gives soul to
          universe, wings to the mind, flight to the imagination, and charm and
          gaiety to the life and everything else. At the same time it also gives
          opportunities to outstanding young musicians to participate in
          creating quality music within and outside of Slovenian cultural space.
          It consists of students and graduates of renowned music schools such
          as: Academy for music Ljubljana, Gradz, Klagenfurt, Detmold, Vienna,
          Zagreb and members of RTV Symphony orchestra Slovenia, Slovenian
          Philharmonic orchestra etc.
        </div>
        <br />
        <Image src={j} responsive />
        <br />
        <br />
        <div className="ml-2 text-justify">
          Chamber orchestra Amadeo held concerts in "Kristalni abonma",
          "Mednarodni cikel" and took part in festivals such as "Pisana Loka",
          "Loka v Snegu" (Škofja Loka), "Poletje v knežjem mestu", "Večeri v
          atriju" (Celje), concert cycle in National gallery in Ljubljana and
          Freising (Germany), “Gerbičevi večeri” in Cerknica etc.
          <br /><br />
          With chamber orchestra Amadeo performed as soloist renowned Slovenian
          and foreign artists such as Matjaž Robavs (tenor), Liza Šparovec
          (soprano), Marta Močnik-Pirc (soprano), Urška Rihtaršič (harp), Franc
          Avsenek (viola), Igor Krizman (accordion), Goran Farkaš (folk
          instruments), Feri Lainšček (poet), Ana Obreza (dramaturg), Rok
          Kravanja (actor) etc.
          <br /><br />
        </div>
        <div>
          {!api.isLoggedIn() && (
            <Link className="littleLinks" to="/signup">
              sign up
            </Link>
          )}
          {!api.isLoggedIn() && (
            <Link className="littleLinks" to="/login">
              log in
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Association;
