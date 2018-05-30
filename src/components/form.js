import React, { Component } from 'react';
import firebase from '../firebase';

//for radio button
const choices = ["CS Degree", "Self-Taught", "Bootcamp", "Other"];

//[name, placeholder]
const inputs = [
  ["username","What's your name?"],
  ["numInterviews", "# of interviews you received"],
  ["applications", "How many applications did you submit?"],
  ["offers", "How many offers did you receive?"]
]

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numInterviews: '',
      education: '',
      username: '',
      applications: '',
      offers: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('searchData');
    itemsRef.push(this.state);
    this.setState({
      numInterviews: '',
      education: '',
      username: '',
      applications: '',
      offers: ''
    });
  }

  handleChange(e) {
    this.setState({
    [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {
          inputs.map(([name, placeholder]) => (
            <input
              key={ name }
              type="text"
              name={ name }
              placeholder = { placeholder }
              onChange = { this.handleChange }
              value = { this.state.name }
            />
          ))
        }
        <fieldset>
          <legend>Please select your level of education:</legend>
            {
             choices.map((text) => (
                <div key={ text }>
                  <input
                    type="radio" id={ text }
                    name="education"
                    value={ text }
                    onChange={this.handleChange}
                  />
                  <label htmlFor={ text }>{ text }</label>
                </div>
              ))
            }
        </fieldset>
        <button>Submit Data</button>
      </form>
    )
  }
}

export default InputForm;
