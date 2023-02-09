import React from 'react';
import { Link } from 'react-router-dom';

class Solutions extends React.Component {
  render() {
    return (
      <div className="sobre-mim">
        <h1>Página Solutions</h1>
        <section className='sobre'>
          <article>
            <div className="paragrafo">
              <p>
                Em construção
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

export default Solutions;
