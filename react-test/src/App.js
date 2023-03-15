import React, { Component } from 'react';
import "./App.css";
class Form extends Component {
 state = {
      name: '',
      email: '',
      phone: '',
      rangeInput: "",
      address: '',
    };
  

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  

  render() {
    return (
      <div class ="container">
      <form id = "registry">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <p>You typed: {this.state.name}</p>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <p>You typed: {this.state.email}</p>

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />
        <p>You typed: {this.state.phone}</p>
        <div className="main">
          <label labelfor="Range">Range</label>
          <input
            type="range"
            name="rangeInput"
            value={this.state.rangeInput}
            onChange={this.handleChange}
          />
        </div>
        <p>You typed: {this.state.rangeInput}</p>

        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
        />
        <p>You typed: {this.state.address}</p>

        
      </form>
      </div>
    );
  }
}

export default Form;