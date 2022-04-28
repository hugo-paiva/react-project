import React from "react";

import './Login.css';

export default class Login extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log("Email: " + this.state.email);
        fetch("http://localhost:9000/login", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
            })
        })
        .then(response => {
            return response.json()})
        .then(data => {
            console.log(data.authorized)
            if (data.authorized) {
              // avança para a pagina seguinte apenas se for autorizado pelo 
              this.props.changeState('athosPage')
            }
        }).catch(error => {
            console.log(error)
        })
    }

  render() {
    return (
      <div className="Layout">
        <div className='login--panel'>
          <h1 className='login--title'>
            MyHashProfiler
          </h1>
          <form onSubmit={this.handleSubmit}>
            <input spellCheck='false' type={'text'} className='input--field' placeholder='Username or email' value={this.state.email} onChange={this.handleEmailChange}></input>
            <input spellCheck='false' type={'password'} className='input--field' placeholder='Password' onChange={this.handlePasswordChange}></input>
            <input type={'submit'} className='input--submit' value={'Login'} ></input>
          </form>
            <span className='has--account' onClick={() => this.props.changeState('register')}>Create account</span>
        </div>
      </div>
    );
  }
};
