import React, { Component } from "react";
import Form from "./Form"

class ParentComponent extends Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

    render() {
      return(
        <Form 
           formData={this.state}
           handleChange={this.handleChange}
        />

      );
    }
}

export default ParentComponent;