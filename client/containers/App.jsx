import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router'
import { Counter, Titlebar, WindowSize } from '../components';

import Styles from './styles/styles';
import Home from './home/home';
import Foo from './foo/foo';
import Bar from './bar/bar';

export class App extends Component {
  static contextTypes = {
    store: PropTypes.object,
    freeStyle: PropTypes.object
  };
  
  constructor(props, context) {
    super(props, context);
    this.freeStyle = context.freeStyle;
  }
  
  render() {
    return <Styles>
      <Titlebar title="Title" />
      
      <div style={{paddingTop:120}}>
        <Router history={this.props.history}>
          <Route path="/" component={Home}/>
          <Route path="/foo" component={Foo}/>
          <Route path="/bar" component={Bar}/>
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
    </Styles>;
  }
}
