import React from "react";

import './Register.css';

export default class Register extends React.Component {

      constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            birthdate: "",
            phone: "",
            password: "",
            fullName: ""
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleFullNameChange = this.handleFullNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleBirthdateChange = this.handleBirthdateChange.bind(this);
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

    handleBirthdateChange(event) {
        this.setState({ birthdate: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }
    j
    handleFullNameChange(event) {
        this.setState({ fullName: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("Nome: " + this.state.name);
        console.log("Email: " + this.state.email);
        console.log("Telefone: " + this.state.phone);

        /*let date = new Date();
        let day = String(date.getDate()).padStart(2, '0');
        let month = String(date.getMonth() + 1).padStart(2, '0');
        let year = date.getFullYear();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        let currentDate = day + '/' + month + '/' + year +  ' - Horário: '  + hour + ':' + minute + ':' + seconds;*/


        fetch("http://localhost:9000/postForms", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                fullName: this.state.fullName,
                birthdate: this.state.birthdate
            })
        })
        .then(response => {
            return response.text()})
        .then(data => {
            console.log(data)
            this.setState({
                name: "",
                email: "",
                birthdate: "",
                password: "",
                fullName: ""
            })
            this.props.changeState('login')
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
            <input spellCheck='false' type={'text'} className='input--field' placeholder='Full Name' value={this.state.fullName} onChange={this.handleFullNameChange}></input>
            <input spellCheck='false' type={'text'} className='input--field' placeholder='Username' value={this.state.name} onChange={this.handleNameChange}></input>
            <input spellCheck='false' type={'email'} className='input--field' placeholder='E-mail' value={this.state.email} onChange={this.handleEmailChange}></input>
            <input spellCheck='false' type={'date'} className='input--field' placeholder='Nascimento dd/mm/aaaa' value={this.state.birthdate} onChange={this.handleBirthdateChange}></input>
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
