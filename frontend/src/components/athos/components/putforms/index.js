import React from "react";
import "./style.css";

class PutForms extends React.Component {
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
            <div className="container">
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <h3>Editar Usuário:</h3>
                    <div className="form-group">
                        <label htmlFor="name">ID: </label>
                        <input type="text" className="form-control" id="id" value={this.state.id} onChange={this.handleIdChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Nome: </label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefone: </label>
                        <input type="text" className="form-control" id="phone" value={this.state.phone} onChange={this.handlePhoneChange} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}

export default PutForms;