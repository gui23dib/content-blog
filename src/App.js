import React, {Component} from 'react';
import './global.css';
import Home from './component/Home';
import Content from './component/Content-page';
import Login from './component/Login';
import About from './component/About';
import Header from './Header.js';
import Register from './component/Register';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

class App extends Component{
    render(){
        return(
          <div>
            <Router>
              <Header />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/content' element={<Content />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            </Router>
          </div>
        );
    }
}

export default App;