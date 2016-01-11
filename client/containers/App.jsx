import React, { Component } from 'react';
import { Router, Route } from 'react-router'
import { Counter, Titlebar, WindowSize } from '../components';

import {AppHome, AppFoo, AppBar} from '../components';

export class App extends Component {
  render() {
    return <div>
      <Titlebar title="Title" />
      
      <div style={{paddingTop:120}}>
        <Router history={this.props.history}>
          <Route path="/" component={AppHome}/>
          <Route path="/foo" component={AppFoo}/>
          <Route path="/bar" component={AppBar}/>
        </Router>
      </div>


      <WindowSize 
        style={{
          position: 'fixed',
          top: 'auto',
          left: 'auto',
          right: '0',
          bottom: '0',
          zIndex: '10',
          backgroundColor: '#888',
          color: '#fff',
          padding: 5
        }} 
      />
    </div>;
  }
}
