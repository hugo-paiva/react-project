import React from "react";
import './style.css'

import Base from './BaseLogin';

const props01 = [
  {spellCheck: 'false'}, 
  {type:'text'},
  {className:'input--field'},
  {placeholder:'Username or email'}, 
  {value: this.state.identifier}, 
  // {onChange: this.handleIdentifierChange}
];

const props02 = [
  {spellCheck:'false'}, 
  {type:'password'}, 
  {className:'input--field'}, 
  {placeholder:'Password'}, 
  // {onChange:this.handlePasswordChange},
];

const props03 = [
  {type:'submit'}, 
  {className:'input--submit'}, 
  {value:'Login'}
];

const props04 = [
  {className:'has--account'},
  // {onClick: () => this.props.changeState('register') }
];

//
// let elem = React.createElement(
//   this.props.tag,
//   { 
//       style: this.props.style,
//       id: this.props.id
//       onClick: () => {console.log('clicked')}
//   },
// )
//

export default class Login extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            identifier: "",
            password: ""
        };
        this.handleIdentifierChange = this.handleIdentifierChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleIdentifierChange(event) {
        this.setState({ identifier: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log("identifier: " + this.state.identifier);
        fetch("http://localhost:9000/login", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                identifier: this.state.identifier,
                password: this.state.password,
            })
        })
        .then(response => {
            return response.json()})
        .then(data => {
            console.log(data)
            if (data.authorized) {
              // avança para a pagina seguinte apenas se for autorizado pelo 
              this.props.changeState('mainPage')
            }
        }).catch(error => {
            console.log(error)
        })
    }


    
  render() {
    return (
      // <Base />
      React.createElement('div',{className:'Layout'},
        React.createElement('div', {className:'login--panel'},
            React.createElement('h1', {className: 'login--title'}, 'MyHashProfiler'),
            React.createElement('form', {onSubmit: this.handleSubmit}, 
                React.createElement('input', props01, null),
                React.createElement('input', props02, null),
                React.createElement('input', props03, null),
            ),
            React.createElement('span', props04, 'Create account')
        )
      )
    );
  }
};
