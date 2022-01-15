import React from 'react';
import DisplayData from "./DisplayData";

class Form extends React.Component {

  render() {
    return (
      <div>
        <form>
          <input type="text" name="firstName" onChange={event => this.props.handleChange(event)} value={this.props.firstName} />
          <input type="text" name="lastName"  onChange={event => this.props.handleChange(event)} value={this.props.lastName} />
        </form>
        <DisplayData formData={this.props.formData}/>
      </div>
    )
  }
}

export default Form;