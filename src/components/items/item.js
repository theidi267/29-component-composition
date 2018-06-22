import React from 'react';

import ItemForm from './item-form.js';
import {renderIf} from '../../lib/utils.js';

export default class Item extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editing:false};
    this.deleteItem = this.deleteItem.bind(this);
    this.toggleEditState = this.toggleEditState.bind(this);
  }

  toggleEditState() {
    let editing = !this.state.editing;
    this.setState({editing});
  }

  deleteItem() {
    this.props.delete(this.props.item.id);
  }

  render() {

    return (
      <li key={this.props.item.id}>
        <a className="delete" href="#" onClick={this.deleteItem}>x</a>
        <a className="edit" href="#" onClick={this.toggleEditState}>e</a>

        {
          renderIf(
            this.state.editing,
            <ItemForm
              toggleEditState={this.toggleEditState}
              handler={this.props.handler}
              item={this.props.item}
            />,
            <span>
              {this.props.item.text}
            </span>
          )
        }

      </li>
    );
  }
}