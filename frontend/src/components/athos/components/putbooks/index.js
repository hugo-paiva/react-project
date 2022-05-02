import React from "react";
import "./style.css";

class PutBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            title: "",
            author: "",
            publisher: "",
            gender: "",
            pub_year: ""
        };
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handlePublisherChange = this.handlePublisherChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handlePubYearChange = this.handlePubYearChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleIdChange(event) {
        this.setState({ id: event.target.value });
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleAuthorChange(event) {
        this.setState({ author: event.target.value });
    }

    handlePublisherChange(event) {
        this.setState({ publisher: event.target.value });
    }

    handleGenderChange(event) {
        this.setState({ gender: event.target.value });
    }

    handlePubYearChange(event) {
        this.setState({ pub_year: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:9000/putBooks", {
            method: "PUT",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                author: this.state.author,
                publisher: this.state.publisher,
                gender: this.state.gender,
                pub_year: this.state.pub_year
            })
        })
        .then(response => {
            return response.text()})
        .then(data => {
            console.log(data)
            this.setState({
                id: "",
                title: "",
                author: "",
                publisher: "",
                gender: "",
                pub_year: ""
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="container">
                <hr/>
                <form onSubmit={this.handleSubmit} className="forms-books">
                    <h3>Editar Livro:</h3>
                    <div className="form-group">
                        <label htmlFor="name">ID: </label>
                        <input type="text" className="form-control" id="id" value={this.state.id} onChange={this.handleIdChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Título: </label>
                        <input type="text" className="form-control" id="title" value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Autor: </label>
                        <input type="text" className="form-control" id="author" value={this.state.author} onChange={this.handleAuthorChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="publisher">Editora: </label>
                        <input type="text" className="form-control" id="publisher" value={this.state.publisher} onChange={this.handlePublisherChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gênero: </label>
                        <input type="text" className="form-control" id="gender" value={this.state.gender} onChange={this.handleGenderChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pub_year">Ano: </label>
                        <input type="text" className="form-control" id="pub_year" value={this.state.pub_year} onChange={this.handlePubYearChange} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}

export default PutBooks;