import React from 'react';
import {Link} from 'react-router-dom';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      notes: [],
    };
  }    
  
  render() {
    return (
      <div>
        <h2>Create a new note:</h2>
        <ul>
          <li><Link to='/dashboard'>Create A New Note</Link></li>
        </ul>
      </div>
    );
  }
}