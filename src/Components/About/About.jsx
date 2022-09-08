import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about">
        <div className="cont-about">
            <div className="about-left">
                <div className="circle-about">
                    <h3 className="about-title">Sobre Mi</h3>
                    <span><i></i></span>
                </div>
            </div>
            <div className="about-right">
                <p>Hola! Soy Yesica González, tengo 27 años y soy Desarrolladora Full Stack.</p>
                <p>Inicie en el mundo de la programación hace dos años de manera autodidacta, nunca me imaginé la pasión que me iba a generar. Por este motivo hace un año decidí empezar a certificarme para demostrar mis conocimientos y poder conseguir mi primer experiencia laboral en el increíble mundo IT.</p>
                <p>Tengo experiencia trabajando para una agencia de Estados Unidos en el que me desempeñé como Desarrolladora Web Full Stack Trainee, en la cual utilice lenguajes y tecnologías como:</p>
                <span>HTML | CSS | JavaScript | JQuery | PHP | MySQL | Wordpress | Bootstrap</span>
            </div>
        </div>
    </div>
  )
}

export default About;