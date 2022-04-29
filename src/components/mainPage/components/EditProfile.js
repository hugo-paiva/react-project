import React from "react";

export default class EditProfile extends React.Component {
  render() {
    return (
      <div className="editForm">
        <h2 className="editFormTitle">Edit Profile</h2>
        <div className="fields">
          <div className="editFields">
            <span>Full name:</span>
            <span>Username:</span>
            <span>Email:</span>
            <span>New password:</span>
            <span>Confirm new password:</span>
          </div>
          <div className="editInputs">
            <input type="text" className="fieldInput"></input>
            <input type="text" className="fieldInput"></input>
            <input type="text" className="fieldInput"></input>
            <input type="text" className="fieldInput"></input>
            <input type="text" className="fieldInput"></input>
          </div>
        </div>

        <button className="editBtn">Salvar</button>
      </div>
    );
  }
}
