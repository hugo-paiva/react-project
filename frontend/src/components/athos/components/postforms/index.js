import React from "react";
import "./style.css";

class PostForms extends React.Component {
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
                phone: this.state.phone,
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
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="container">
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <h3>Adicionar Usuário:</h3>
                    <div className="form-group">
                        <label htmlFor="name">Nome</label>
                        <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Senha</label>
                        <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefone</label>
                        <input type="text" className="form-control" id="phone" value={this.state.phone} onChange={this.handlePhoneChange} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}

export default PostForms;