import React from "react";
import './style.css'

import Base from './BaseLogin.js';

export default class Login extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            identifier: "",
            password: ""
        };
        this.handleIdentifierChange = this.handleIdentifierChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleIdentifierChange(event) {
        this.setState({ identifier: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log("identifier: " + this.state.identifier);
        fetch("http://localhost:9000/login", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                identifier: this.state.identifier,
                password: this.state.password,
            })
        })
        .then(response => {
            return response.json()})
        .then(data => {
            console.log(data)
            if (data.authorized) {
              // avança para a pagina seguinte apenas se for autorizado pelo 
              this.props.changeState('mainPage')
            }
        }).catch(error => {
            console.log(error)
        })
    }


    
  render() {
    return (
      <Base />
    );
  }
};

{/**
      <div className="Layout">
        <div className='login--panel'>
          <h1 className='login--title'>
            MyHashProfiler
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input spellCheck='false' type={'text'} className='input--field' placeholder='Username or email' value={this.state.identifier} onChange={this.handleIdentifierChange}></input>
            <input spellCheck='false' type={'password'} className='input--field' placeholder='Password' onChange={this.handlePasswordChange}></input>
            <input type={'submit'} className='input--submit' value={'Login'} ></input>
          </form>
          <span className='has--account' onClick={() => this.props.changeState('register')}>Create account</span>
        </div>
      </div>
*/}


