import React from 'react';
import "./Projetos.css";
import foto from '../images/pedro.jpeg';
import { Link } from 'react-router-dom';

class Projetos extends React.Component {
  render() {
    return (
      <div className="secao-projetos">
      <h1 className="title">Aqui estão alguns dos meus projetos</h1>
      <div>
      <div class="depoimento">
        <img
          class="imagem-redonda"
          src={ foto }
          alt="Imagem do Pedro Araújo"
          width="100px"
        />
        <p>
          <em>
            "Eu trabalho com Marketing e não tinha nenhuma formação ou experiência na área e consegui
            entrar na Trybe para me tornar desenvolvedor de software."</em
          >
        </p>
        <a class="git" className="link" href="https://github.com/Pedroshalom" target="_blank" rel="noreferrer"><p>Clique aqui</p></a>
      </div>
      <div class="depoimento">
        <img
          class="imagem-redonda"
          src={ foto }
          alt="Imagem do Pedro Araújo"
          width="100px"
        />
        <p>
          <em>
            "Eu não sabia nada de programação! Estudei os conteúdos gratuitos disponibilizados, consegui
            fazer o processo e passar. Estou aqui firme e forte para conseguir virar um
            desenvolvedor."</em
          >
        </p>
        <a class="git" className="link" href="https://github.com/Pedroshalom" target="_blank" rel="noreferrer"><p>Clique aqui</p></a>
      </div>
      <div class="depoimento">
        <img
          class="imagem-redonda"
          src={ foto }
          alt="Imagem do Pedro Araújo"
          width="100px"
        />
        <p>
          <em>
            "Sou estudante de Engenharia Química e entrei na Trybe sem nenhuma experiência na área e
            estou animado para me tornar desenvolvedor."</em
          >
        </p>
        <a class="git" className="link" href="https://github.com/Pedroshalom" target="_blank" rel="noreferrer"><p>Clique aqui</p></a>
      </div>
      <div class="depoimento">
        <img
          class="imagem-redonda"
          src={ foto }
          alt="Imagem do Pedro Araújo"
          width="100px"
        />
        <p>
          <em>
            "Sou estudante de Engenharia Química e entrei na Trybe sem nenhuma experiência na área e
            estou animado para me tornar desenvolvedor."</em
          >
        </p>
        <a class="git" className="link" href="https://github.com/Pedroshalom" target="_blank" rel="noreferrer"><p>Clique aqui</p></a>
      </div>
      <div class="depoimento">
        <img
          class="imagem-redonda"
          src={ foto }
          alt="Imagem do Pedro Araújo"
          width="100px"
        />
        <p>
          <em>
            "Sou estudante de Engenharia Química e entrei na Trybe sem nenhuma experiência na área e
            estou animado para me tornar desenvolvedor."</em
          >
        </p>
        <a class="git" className="link" href="https://github.com/Pedroshalom" target="_blank" rel="noreferrer"><p>Clique aqui</p></a>
      </div>
    </div>
      <span className="n-list">
       <Link className="link" to="/">Página Inicial</Link>
         </span>
      </div>
    );
  }
}

export default Projetos;

