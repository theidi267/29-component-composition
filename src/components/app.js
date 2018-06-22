import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Dashboard from './dashboard/dashboard.js';

import Header from './header/header.js';
import Footer from './footer/footer.js';
import Landing from './landing/landing.js';
import Items from './items/items.js';
import Item from './item/item.js';
import '../style/app.scss';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items:{},
    };

    this.addItem = this.addItem.bind(this);

  }

  addItem(data) {
    let item = {};
    item[data.id] = data.text;
    this.setState( Object.assign(this.state.items,item) );
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header title="Our Basic App" />     
          <main>
            <Route exact path="/" component={Landing} />
            <Route exact path="/items"
              component={() =>
                <Items
                  handleAdd={this.addItem}
                  items={this.state.items}
                />
              }
            />
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/item/:id"
              component={(props) =>
                <Item
                  {...props}
                  items={this.state.items}
                />
              }
            />
          </main>
          <Footer footerText="What a pretty color!" />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}