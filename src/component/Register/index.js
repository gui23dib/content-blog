import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Login/login.css';


class Register extends Component{

  constructor(props){
    super(props);
    this.state = {
      user: '',
      email: '',
      password: ''
    };

  }
  
    render(){
      return(
        <div id="Formstyle" className='Formstyle'>
          <form id="form" className='form'> {/* USAR BIND NA STATE DO ONSUBMIT FAZ COM QUE A PAGINA NAO RENDERIZE (DUVIDA) */}

          <label>Usuário:</label><br/>
              <input type="text" autoComplete="off" autoFocus value={this.state.user}
              onChange={(e) => this.setState({user: e.target.value})} placeholder="novo.usuario"/>
              <br/>

            <label>Email:</label><br/>
              <input type="email" autoComplete="off" autoFocus value={this.state.email}
              onChange={(e) => this.setState({email: e.target.value})} placeholder="seuemail@email.com"/>
              <br/>

            <label>Senha:</label><br/>
              <input type="password" autoComplete="off" value={this.state.password}
              onChange={(e) => this.setState({password: e.target.value})} placeholder="suasenha123"/>
              <br/>
  
            <button type="submit">Cadastrar</button><br/>

            <div className='reglink'> Já tem uma conta? <div><Link to ='/login' className='rrlink'> clique aqui</Link></div></div>

          </form>
        </div>
      );
    }
  }
  
  export default Register;