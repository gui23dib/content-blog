import React, {Component} from 'react';
import {Link} from 'react-router-dom';

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
            <div>
                <form>

                    <label>Email: </label><br/>
                    <input typer="email" autoComplete="off" autoFocus value={this.state.email} 
                    onChange={(element) => this.setState({email: element.target.value})} placeholder="Meuemail@email.com"/>
                    <br/>

                    <label>Senha: </label><br/>
                    <input typer="password" autoComplete="off" value={this.state.password} 
                    onChange={(element) => this.setState({password: element.target.value})} placeholder="Senha1234"/>
                    <br/>

                </form>
            </div>
        );
    }
}

export default Login;