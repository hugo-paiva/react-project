import React, {Fragment} from "react";
import "./style.css";

async function getForms() {
    const response = await fetch("http://localhost:9000/getForms", {credentials: 'include'});
    const data = await response.json();
    return data;
}

class GetForms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {      
            forms: []//você pode inicializar state com dados manualmente ou com um array vazio caso os dados sejam carregados via API
        };
    }
    
    //Usa-se o método componentDidMount para preencher o state do componente com os dados do servidor/api
    componentDidMount() {//método do React que é chamado quando o componente está sendo montado no DOM pela primeira vez. Ou seja, o componentDidMount é chamado apenas uma vez.
        getForms().then((data) => {
            this.setState(state => ({
                forms: data
            }));
        });
    }

    componentDidUpdate() {
        getForms().then((data) => {
            this.setState(state => ({
                forms: data
            }));
        });
    }

    formsUpdate() {
        getForms().then((data) => {
            this.setState(state => ({
                forms: data
            }));
        });
    }

    testezinho() {
        return <p>{this.state.forms}</p>
    }

    AllForms() {
        // eslint-disable-next-line
        let forms = this.state.forms.map((form) => 
                    <tr key={form.id}>
                        <td>{form.id}</td>
                        <td>{form.name}</td>
                        <td>{form.email}</td>
                        <td>{form.phone}</td>
                    </tr>
        );
        return forms;
    }

    render() {//método do React que é chamado quando o componente precisa ser renderizado, ele é chamado sempre que o state do componente é alterado, ou seja, o componentDidMount faz o render executar duas vezes o que não tem problema.
        return (
            <Fragment>
                <hr/>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Telefone</th>
                        </tr>
                        {this.AllForms()}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default GetForms;
