import React from 'react';
import "./Projetos.css";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
// import github from '../images/ggit.png';
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
          <br/>
          <div>
          
            <Carousel className='carrossel'>
              <Carousel.Item>
                <div>
                <img className="item-1" src={foto} alt='projeto-pixel-art'/>
                </div>
               
              </Carousel.Item>
              <Carousel.Item >
                <div>
                <img className="item-1" src={print2} alt='projeto-trybe-hog'/>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div>
                <img className="item-1" src={foto} alt='projeto-system'/>
               
                </div>
              </Carousel.Item>
              <Carousel.Item >
                <div>
                  <img className="item-1" src={foto} alt='projeto-trybe-tunes'/>
                
                </div>
              </Carousel.Item>
            </Carousel>
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