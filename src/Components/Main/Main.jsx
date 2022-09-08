import React from 'react';
import './Main.css';
import character from '../../img/character.png';
import flecha from '../../img/flechaa.png';
import CV from '../../assets/CVYesica Gonzalez-DesarrolloWeb.pdf';

const Main = () => {
return (
<div className="main">
  <section className="main-blur">
    <div className="main-left">
      <div className="main-name">
        <span>Hello!</span>
        <img className="img-flecha" src={flecha} alt="" />
        <span>Soy Yesica Gonzalez, desarrolladora Web Full Stack.</span>
        <a href={CV} className="main-button">Descargar CV</a>
      </div>
    </div>
    <div className="main-right">
      <div className="circle">
        <span></span>
        <span></span>
        <span></span>
        <div className="content">
          <img src={character} alt="Img Character" className="img-circle" />
        </div>
      </div>
    </div>
  </section>
</div>
)
}

export default Main;