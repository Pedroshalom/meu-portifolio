import React from 'react';
import "./Projetos.css";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import foto from '../images/print.png';
import print2 from '../images/print2.png';


class Projetos extends React.Component {
  render() {
    return (
      <article>
        <section>
        </section>
        <section>
          <h2 className='titulos'>Meus Projetos</h2>
          <br />
          <br />
          <br />
          <br />
          <div>
            <div>
              <div className='todos-icones'>
                <img className="item-1" src={foto} alt='projeto-pixel-art' />
                <img className="item-1" src={print2} alt='projeto-trybe-hog' /> 
                {/* <img className="item-1" src={foto} alt='projeto-system' /> */}
                {/* <img className="item-1" src={foto} alt='projeto-trybe-tunes' />
                <img className="item-1" src={print2} alt='projeto-trybe-hog' /> */}
              </div>
            </div>
          </div>
        </section>
        <br />
        <span className="n-list">
          <Link className="link" to="/">Página Inicial</Link>
        </span>
        <br />
      </article>

    );
  }
}
export default Projetos;