import React from "react";
import "./style.css";

class loadImages extends React.Component {
    render() {
        return (
            <div className="container">
                <hr />
                <img src="http://localhost:9000/getImage/4" alt="criançameme" />
            </div>
        );
    }
}

export default loadImages;