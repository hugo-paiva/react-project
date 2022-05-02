import React from "react";
import "./style.css";

async function getForms() {
  const response = await fetch("http://localhost:9000/getBooks", { credentials: 'include' });
  const data = await response.json();
  return data;
}

export default class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: []//você pode inicializar state com dados manualmente ou com um array vazio caso os dados sejam carregados via API
    };
  }

  componentDidMount() {//método do React que é chamado quando o componente está sendo montado no DOM pela primeira vez. Ou seja, o componentDidMount é chamado apenas uma vez.
    getForms().then((data) => {
      console.log(data);
      this.setState(state => ({
        forms: data
      }));
    });
  }

  AllForms() {
    // eslint-disable-next-line
    let forms = this.state.forms.map((form) =>
      <div className="contentLine" key={form.id}>
        <div className="content">
          <abbr>{form.title}</abbr>
        </div>
        <div className="content">
          <abbr>{form.author}</abbr>
        </div>
        <div className="content">
          <abbr>{form.publisher}</abbr>
        </div>
        <div className="content">
          <abbr>{form.gender}</abbr>
        </div>
        <div className="content">
          <abbr>{form.pub_year}</abbr>
        </div>
      </div>
    );

    return forms;
  }

  render() {



    return (
      <main>
        <header>
          <h1>Books List</h1>
        </header>
        <div className="headerContentLine">
          <div className="content">
            <abbr>Nome</abbr>
          </div>
          <div className="content">
            <abbr>Autor</abbr>
          </div>
          <div className="content">
            <abbr>Editora</abbr>
          </div>
          <div className="content">
            <abbr>Gênero</abbr>
          </div>
          <div className="content">
            <abbr>Publicação</abbr>
          </div>
        </div>
        <div className="tableContent">
        {this.AllForms()}
        </div>
      </main>
    );
  }
}
