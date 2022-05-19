import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render(){
        return(
          <div id="Formstyle" className='Formstyle'>
          <form onSubmit={this.loginSucces} id="form" className='form'> {/* USAR BIND NA STATE DO ONSUBMIT FAZ COM QUE A PAGINA NAO RENDERIZE (DUVIDA) */}

            <label>Email:</label><br/>
              <input type="email" autoComplete="off" autoFocus value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})} placeholder="seuemail@email.com"/>
              <br/>

            <label>Senha:</label><br/>
              <input type="password" autoComplete="off" value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})} placeholder="suasenha123"/>
              <br/>
  
            <button type="submit">Entrar</button><br/>

            <div className='reglink'> Não esta cadastrado? <div><Link to ='/register' className='rrlink'> clique aqui</Link></div></div>

          </form>
        </div>
        );
    }
}

export default Login;