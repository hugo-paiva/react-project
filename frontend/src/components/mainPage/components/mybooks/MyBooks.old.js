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
      <div className="contentLine">
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
            <abbr>Name</abbr>
          </div>
          <div className="content">
            <abbr>Gender</abbr>
          </div>
          <div className="content">
            <abbr>Total Pages</abbr>
          </div>
          <div className="content">
            <abbr>Pages read</abbr>
          </div>
          <div className="content">
            <abbr>Pages Left</abbr>
          </div>
        </div>
        <div className="tableContent">
        {this.AllForms()}
          <div className="contentLine">
            <div className="content">
              <abbr>Os Contos do Rei do Inverno</abbr>
            </div>
            <div className="content">
              <abbr>Romance, Ficção</abbr>
            </div>
            <div className="content">
              <abbr>528</abbr>
            </div>
            <div className="content">
              <abbr>100</abbr>
            </div>
            <div className="content">
              <abbr>428</abbr>
            </div>
          </div>
          <div className="contentLine">
            <div className="content">
              <abbr>Harry Potter e o Cálice de Fogo</abbr>
            </div>
            <div className="content">
              <abbr>Fantasia</abbr>
            </div>
            <div className="content">
              <abbr>584</abbr>
            </div>
            <div className="content">
              <abbr>200</abbr>
            </div>
            <div className="content">
              <abbr>384</abbr>
            </div>
          </div>
          <div className="contentLine">
            <div className="content">
              <abbr>O pequeno principe</abbr>
            </div>
            <div className="content">
              <abbr>Fábula</abbr>
            </div>
            <div className="content">
              <abbr>96</abbr>
            </div>
            <div className="content">
              <abbr>86</abbr>
            </div>
            <div className="content">
              <abbr>10</abbr>
            </div>
          </div>
          <div className="contentLine">
            <div className="content">
              <abbr>O Poder do Hábito</abbr>
            </div>
            <div className="content">
              <abbr>autoajuda</abbr>
            </div>
            <div className="content">
              <abbr>408</abbr>
            </div>
            <div className="content">
              <abbr>204</abbr>
            </div>
            <div className="content">
              <abbr>204</abbr>
            </div>
          </div>
          <div className="contentLine">
            <div className="content">
              <abbr>
                SCRUM: a arte de fazer o dobro do trabalho na metade do tempo
              </abbr>
            </div>
            <div className="content">
              <abbr>autoajuda</abbr>
            </div>
            <div className="content">
              <abbr>256</abbr>
            </div>
            <div className="content">
              <abbr>56</abbr>
            </div>
            <div className="content">
              <abbr>200</abbr>
            </div>
          </div>
          <div className="contentLine">
            <div className="content">
              <abbr>Rápido e devagar</abbr>
            </div>
            <div className="content">
              <abbr>autoajuda</abbr>
            </div>
            <div className="content">
              <abbr>608</abbr>
            </div>
            <div className="content">
              <abbr>408</abbr>
            </div>
            <div className="content">
              <abbr>200</abbr>
            </div>
          </div>
          <div className="contentLine">
            <div className="content">
              <abbr>
                Antifrágil (Nova edição): Coisas que se beneficiam com o caos
              </abbr>
            </div>
            <div className="content">
              <abbr>autoajuda</abbr>
            </div>
            <div className="content">
              <abbr>616</abbr>
            </div>
            <div className="content">
              <abbr>200</abbr>
            </div>
            <div className="content">
              <abbr>416</abbr>
            </div>
          </div>
          <div className="contentLine">
            <div className="content">
              <abbr>Atenção Plena: Mindfulness</abbr>
            </div>
            <div className="content">
              <abbr>autoajuda</abbr>
            </div>
            <div className="content">
              <abbr>208</abbr>
            </div>
            <div className="content">
              <abbr>208</abbr>
            </div>
            <div className="content">0</div>
          </div>
          <div className="contentLine">
            <div className="content">
              <abbr>Os Contos do Rei Careca</abbr>
            </div>
            <div className="content">
              <abbr>Inclivel</abbr>
            </div>
            <div className="content">
              <abbr>10.000</abbr>
            </div>
            <div className="content">
              <abbr>1</abbr>
            </div>
            <div className="content">
              <abbr>9.999</abbr>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
