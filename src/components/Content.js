import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SobreMIm from '../pages/SobreMim';
import Home from '../pages/Home';
import Projetos from '../pages/Projetos';
import Trabalhos from '../pages/Trabalhos';

class Content extends React.Component {
  render() {
    return (
      <main className="Content">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/Sobre-mim" component={ SobreMIm } />
          <Route path="/Trabalhos" component={ Trabalhos } />
          <Route path="/projetos" component={ Projetos } />
          </Switch>
      </main>
    );
  }
}

export default Content;
