import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SobreMIm from '../pages/SobreMim';
import Home from '../pages/Home';
import Projetos from '../pages/Projetos';
import Tecnologias from '../pages/Tecnologias';

class Content extends React.Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/Sobre-mim" component={ SobreMIm } />
          <Route path="/Tecnologias" component={ Tecnologias } />
          <Route path="/projetos" component={ Projetos } />
          </Switch>
      </main>
    );
  }
}

export default Content;
