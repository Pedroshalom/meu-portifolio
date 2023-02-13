import React from 'react';
import { Link } from 'react-router-dom';
import foto from '../images/ped.png';

class SobreMim extends React.Component {
// voltarBtn = () => {
//  const { history } = this.props;
//  history.push('/');
// }

  render() {
    // const { voltarBtn } = this.state
    return (
      <div className="sobre-mim">
        <h1 className='titulos'>Sobre Mim</h1>
        <section  className='sobre'>
          <article>
          <img
          class="imagen-div"
          src={ foto }
          alt="Caricatura do Pedro Araujo"
        />         
        <div className="paragrafo">
            <p>
              Olá meu nome é Pedro e sou apreciador da tecnologia,
 e marcas que trabalhem para contribuir com uma
              melhor interação digital.
              não sabia nada de programação e hoje ja estou começando
              a fazer coisas que nen eu imaginava. Estou ganhando um conhecimento que nunca será perdido.
              Atualmente sou estudante de desenvolvimento WEB FullStack na Trybe e
estou em      busca do meu primeiro emprego!
              </p>
              </div>
          </article>
        </section>

      <span className="n-list">
       <Link className="link" to="/">Página Inicial</Link>
         </span>

      </div>
      
    );
  }
}

export default SobreMim;