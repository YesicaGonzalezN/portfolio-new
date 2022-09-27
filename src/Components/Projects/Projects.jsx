import React from 'react';
import './Projects.css';
import Vaso from '../../img/vaso.png';
import Lista from '../../img/lista.png';
import Dashboard from '../../img/dashboard.jpg';
import Tilt from 'react-vanilla-tilt';

const Projects = () => {
  return (
   <div id="projects">
       <div className="title">
           <h3>Proyectos</h3>
       </div>
    <div className="cards-project">
        <div className="card-project">
            <h2 className="name-project">AquaLife</h2>
            <div className="button-project">
            <a href='https://github.com/YesicaGonzalezN/AquaLife.github.io' target='_blank' rel="noreferrer">GitHub</a>
            <a href='https://aqualife.vercel.app/' target='_blank' rel="noreferrer">Deploy</a>
            </div>
            <div className="circle-project"></div>
            <img src={Vaso} alt="Logo Aqualife" />
        </div>
        <div className="card-project">
            <h2 className="name-project">Lista de Tareas</h2>
            <div className="button-project">
            <a href='https://github.com/YesicaGonzalezN/LISTA-DE-TAREAS' target='_blank' rel="noreferrer">GitHub</a>
            <a href='https://lista-de-tareas-two.vercel.app/' target='_blank' rel="noreferrer">Deploy</a>
            </div>
            <div className="circle-project"></div>
            <img src={Lista} alt="Logo Lista" />
        </div>
        <div className="card-project">
            <h2 className="name-project">Dashboard</h2>
            <div className="button-project">
                <a href='https://github.com/YesicaGonzalezN/dashboard-react' target='_blank' rel="noreferrer">GitHub</a>
                <a href='https://dashboard-juanas.vercel.app/' target='_blank' rel="noreferrer">Deploy</a>
            </div>
            <div className="circle-project"></div>
            <img className="img-dashboard" src={Dashboard} alt="Logo Calculadora" />
        </div>
    </div>
</div>

  )
  
}


export default Projects;