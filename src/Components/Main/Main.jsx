import React from 'react';
import './Main.css';
import character from '../../img/character.png';
import flecha from '../../img/flechaa.png';
import CV from '../../assets/CVYesicaGonzalez.pdf';

const Main = () => {
return (
<div className="main">
  <section className="main-blur">
    <div className="main-left">
      <div className="main-name">
        <h2>Hello!</h2>
        <img className="img-flecha" src={flecha} alt="" />
        <h4>Soy <span>Yesica Gonzalez</span>, desarrolladora Web Full Stack.</h4>
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