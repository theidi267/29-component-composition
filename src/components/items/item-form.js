import React from 'react';
import uuid from 'uuid/v4';

export default class ItemForm extends React.Component {

  constructor(props) {
    super(props);

    this.defaultState = { id:'', title:'' };
    this.state = {
      id: (this.props && this.props.item && this.props.item.id) || '',
      text: (this.props && this.props.item && this.props.item.text) || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let id = this.props.new ? uuid() : this.props.item.id;
    let text = e.target.value;
    this.setState({id,text});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handler(this.state);
    if ( this.props.toggleEditState ) {
      this.props.toggleEditState();
    }
    if ( this.props.new ) {
      this.setState({text:''});
    }
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            name="item"
            placeholder="Enter Item Text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}