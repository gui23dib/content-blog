import React from 'react';
import './global.css';
import Home from './component/Home';
import Content from './component/Content-page';
import Header from './Header';

class App extends React.Component{
    render(){
        return(
          <div>
            <Header />
            <Home />
            <Content />
          </div>
        );
    }
}

export default App;