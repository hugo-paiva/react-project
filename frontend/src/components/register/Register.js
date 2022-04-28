import React from "react";

import './Register.css';

export default class Register extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            password: ""
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Nome: " + this.state.name);
        console.log("Email: " + this.state.email);
        console.log("Telefone: " + this.state.phone);
        let data = new Date();
        let dia = String(data.getDate()).padStart(2, '0');
        let mes = String(data.getMonth() + 1).padStart(2, '0');
        let ano = data.getFullYear();
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let segundo = data.getSeconds();
        let dataAtual = dia + '/' + mes + '/' + ano +  ' - Horário: '  + hora + ':' + minuto + ':' + segundo;
        fetch("http://localhost:9000/postForms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                phone: 94872984 ,
                createAt: dataAtual
            })
        })
        .then(response => {
            return response.text()})
        .then(data => {
            console.log(data)
            this.setState({
                name: "",
                email: "",
                phone: "",
                password: "",
            })
            this.props.changeState('athosPage')
        }).catch(error => {
            console.log(error)
        })
    }


  render() {
    return (
      <div className="Layout">
        <div className='register--panel'>
          <h1 className='register--title'>
            MyHashProfiler
          </h1>
            <span className='register--subtitle'>Register</span>
          <form onSubmit={this.handleSubmit}>
            <input spellCheck='false' type={'text'} className='input--field' placeholder='Full Name'></input>
            <input spellCheck='false' type={'text'} className='input--field' placeholder='Username' value={this.state.name} onChange={this.handleNameChange}></input>
            <input spellCheck='false' type={'email'} className='input--field' placeholder='E-mail' value={this.state.email} onChange={this.handleEmailChange}></input>
            <input spellCheck='false' type={'password'} className='input--field' placeholder='Password' value={this.state.password} onChange={this.handlePasswordChange}></input>
            <input spellCheck='false' type={'password'} className='input--field' placeholder='Confirm password' ></input>
            <input type={'submit'} className='input--submit' value={'Create account'}></input>
          </form>
          <span className='has--account' onClick={() => this.props.changeState('login')}>I already have an account</span>
        </div>
      </div>
    );
  }
};
