import React from "react";
import "./style.css";

class DeleteForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        };
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleIdChange(event) {
        this.setState({ id: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let data = new Date();
        let dia = String(data.getDate()).padStart(2, '0');
        let mes = String(data.getMonth() + 1).padStart(2, '0');
        let ano = data.getFullYear();
        let hora = data.getHours();
        let minuto = data.getMinutes();
        let segundo = data.getSeconds();
        let dataAtual = dia + '/' + mes + '/' + ano +  ' - Horário: '  + hora + ':' + minuto + ':' + segundo;
        fetch("http://localhost:9000/deleteLogicalForms", {
            method: "PUT",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                id: this.state.id,
                deleteAt: dataAtual
            })
        })
        .then(response => {
            return response.text()})
        .then(data => {
            console.log(data)
            this.setState({
                id: ""
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
                    <h3>Deletar Usuário:</h3>
                    <div className="form-group">
                        <label htmlFor="name">ID: </label>
                        <input type="text" className="form-control" id="id" value={this.state.id} onChange={this.handleIdChange}/>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}

export default DeleteForms;