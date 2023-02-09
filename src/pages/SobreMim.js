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
        <h1>Sobre Mim</h1>
        <section  className='sobre'>
          <article>
          <img
          class="imagen-div"
          src={ foto }
          alt="Caricatura do Pedro Araujo"
        />         
        <div className="paragrafo">
            <p>
              Olá sou o Pedro, seja bem vindo(a) a minha homePage. Moro na cidade de Natal-RN.   Sou casado com uma esposa perfeita por sinal, sou pai da menina mais linda que Deus me deu, a (Maju),
              sou torcedor do Flamengo e meus hobbys favoritos são: assitir futebol, sair com amigos, ir a praia e escutar música boa.
              Meu aprendizado na Trybe está sendo bem especial,
              não sabia nada de programação e hoje ja estou começando
              a fazer coisas que nen eu imaginava. Estou ganhando um conhecimento que nunca será perdido.
              Abaixo estão agumas lições que aprendi e que ainda vou aprender nesta minha jornada.
              </p>
              </div>
          </article>
        </section>
        {/* <div className="topo">
          <img src={foto} alt="foto de Pedro" id="minha_foto" />
        </div> */}

      <span className="n-list">
       <Link className="link" to="/">Página Inicial</Link>
         </span>

      </div>
      
    );
  }
}

export default SobreMim;