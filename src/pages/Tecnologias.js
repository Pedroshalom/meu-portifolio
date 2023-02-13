import React from 'react';
import { Link } from 'react-router-dom';

class Tecnologias extends React.Component {
  render() {
    return (
      <section>
        <h1 className='titulos'>Tecnologias</h1>
      <div className="todos-icones">
       <div>
       <figure className="icone">
<img   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" class="card-img-top mt-4" alt="ícone HTML"/>
<p>HTML5</p>
</figure>

<figure className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="card-img-top mt-4" alt="ícone CSS"/>
<p> CSS3</p>
</figure>

<figure className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="card-img-top mt-4" alt="ícone JavaScript"/>
  <p>JavaScript</p>
</figure>
</div>
<div className="todos-icones-2">

<figure className="icone">
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" class="card-img-top mt-4" alt="ícone VSCode"/>
<p>VsCode</p>
</figure>

<figure className="icone">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="card-img-top mt-4" alt="ícone Node js"></img>
<p>Node JS</p>

</figure>
<figure className="icone">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="card-img-top mt-4" alt="ícone React"/>
  <p>React</p>
</figure>


       </div>

      </div>
      <span className="n-list">
       <Link className="link" to="/">Página Inicial</Link>
         </span>
      </section>
    );
  }
}

export default Tecnologias;
