import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
import Content from './components/Content';

class App extends React.Component  {
  render() {
    return (
      <BrowserRouter>
      <div>
        {/* <Sidebar /> */}
        <Content />
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
