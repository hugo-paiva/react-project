import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';   

const props01 = {
    spellCheck: "false", 
    type:'text',
    placeholder:'Username or email', 
    value: "this.state.identifier", 
    onChange: "this.handleIdentifierChange",
};

const props02 = {
    spellCheck: "false", 
    type:'password', 
    placeholder:'Password', 
    onChange:"this.handlePasswordChange",
};

const props03 = {
    type:'submit', 
    value: 'Login',
};

const props04 = {
    className:'has--account',
    onClick: () => this.props.changeState('register')
};

export default class BaseLogin extends React.Component{
    render() {
        return (
            React.createElement('div', {className:'Layout'}, 
                React.createElement('div', {className:'login--panel'},
                    React.createElement('h1', {className: 'login--title'}, 'MyHashProfiler'),
                    React.createElement('form', {onSubmit: "this.handleSubmit"}, 
                        React.createElement('input', [{className:'input--field'}, props01],  null),
                        React.createElement('input', [{className:'input--field'}, props02],  null),
                        React.createElement('input', [{className:'input--submit'}, props03],  null)
                    ),
                    React.createElement('span', props04, 'Create account')
                    )
                )
        );
    }
} 

{/**
{className:'has--account', onClick: () => this.props.changeState('register')}

return (
    React.createElement('div',{className:'Layout'},
        React.createElement('div', {className:'login--panel'},
            React.createElement('h1', {className: 'login--title'}, 'MyHashProfiler'),
            React.createElement('form', {onSubmit: "this.handleSubmit"}, 
                React.createElement('input', props01,  null),
                React.createElement('input', props02,  null),
                React.createElement('input', props03,  null)
            ),
            React.createElement('span', props04, 'Create account')
        )
    )
);

return (
    <div className="Layout">
      <div className='login--panel'>
        <h1 className='login--title'>
          MyHashProfiler
        </h1>
        <form onSubmit={this.handleSubmit}>
          <input spellCheck='false' type={'text'} className='input--field' placeholder='Username or email' value={this.state.identifier} onChange={this.handleIdentifierChange}></input>
          <input spellCheck='false' type={'password'} className='input--field' placeholder='Password' onChange={this.handlePasswordChange}></input>
          <input type={'submit'} className='input--submit' value={'Login'} ></input>
        </form>
        <span className='has--account' onClick={() => this.props.changeState('register')}>Create account</span>
      </div>
    </div>
  );
*/}