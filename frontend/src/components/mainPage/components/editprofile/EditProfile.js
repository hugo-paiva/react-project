import React from "react";
import "./style.css";

export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            email: "",
            phone: "",
        };
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleIdChange(event) {
        this.setState({ id: event.target.value });
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ phone: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("ID: " + this.state.id);
        console.log("Nome: " + this.state.name);
        console.log("Email: " + this.state.email);
        console.log("Telefone: " + this.state.phone);
        fetch("http://localhost:9000/putForms", {
            method: "PUT",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone
            })
        })
        .then(response => {
            return response.text()})
        .then(data => {
            console.log(data)
            this.setState({
                id: "",
                name: "",
                email: "",
                phone: "",
            })
        }).catch(error => {
            console.log(error)
        })
    }

  render() {
    return (
      <div className="edit--panel">
        <h2 className="edit--title">Edit Profile</h2>
          <form onSubmit={this.handleSubmit}>
            <input spellCheck='false' type={'text'} className='input--field' placeholder='Full Name' value={this.state.name} onChange={this.handleNameChange}></input>
            <input spellCheck='false' type={'text'} className='input--field' placeholder='Username' ></input>
            <input spellCheck='false' type={'email'} className='input--field' placeholder='New e-mail' value={this.state.email} onChange={this.handleEmailChange}></input>
            <input spellCheck='false' type={'password'} className='input--field' placeholder='New password'></input>
            <input spellCheck='false' type={'password'} className='input--field' placeholder='Confirm new password'></input>
            <input type={'submit'} className='input--submit' value={'Save'}></input>
          </form>
      </div>
    );
  }
}
