import React from "react";
import linkedin from '../images/linkedin.png';
import instagran from '../images/instagran.png';
import github from '../images/ggit.png';
import foto from '../images/pedro.jpeg';
import Whatsapp from '../images/whatsapp.png';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p>Oi</p>
        <div className="topo">
          <img src={foto} alt="foto de Pedro" id="minha_foto" />
      </div>
      <p className="name">Pedro manoel</p>
      <div className="paragrafo">
            <p>
              Olá, seja bem vindo(a) a minha ao meu portifolio.
              </p>
              </div>
        
      <nav className="social">
          <a href="https://www.linkedin.com/in/pedro-manoel-santos/" target="_blank" rel="noreferrer"><img src={linkedin}
            width="60px" height="35px" alt="icone do linkedin" /></a>
          <a href="https://www.instagram.com/pedrinho_shalom/" target="_blank" rel="noreferrer"><img src={instagran} width="35px"
            height="35px" alt="icone do instagran" /></a>
          <a class="git" href="https://github.com/Pedroshalom" target="_blank" rel="noreferrer"><img src={github} width="50px"
            height="50px" alt="icone do github" /></a>
            <a class="git" href="https://wa.me/+5584987836762" target="_blank" rel="noreferrer"><img src={Whatsapp} width="35px"
            height="35px" alt="icone do github" /></a>
        </nav>
        <div  className="btn">
        <button>baixar meu currículo</button>
        </div>
        <span className="n-list">
       <Link className="link" to="/Trabalhos"> <i className='fi-rr-briefcase option-icon'></i>Trabalhos</Link>
         </span>
         <span className="n-list">
          <br/>
         <Link className="link" to="/Sobre-mim"> <i className='fi-rr-laptop option-icon'></i>Sobre Mim</Link>
         </span>
         <br/>
         <span className="n-list">
         <Link className="link" to="/projetos"> <i className='fi-rr-edit-alt option-icon'></i>Projetos</Link>
         </span>
         <br/>
         <br/>
         <br/>
      </div>
    )
  }
}

export default Home;
