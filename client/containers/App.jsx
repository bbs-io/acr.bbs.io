import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import { Counter, Titlebar, WindowSize } from '../components';

// wrapper components
import Styles from './styles/styles';
import DevTools from './DevTools';

// routed components
import Home from './home/home';
import Foo from './foo/foo';
import Bar from './bar/bar';


//  static contextTypes = {
//    store: PropTypes.object,
//    freeStyle: PropTypes.object
//  };
  
export default function renderApp(props, context) {
  var tools = props.production ? null : <DevTools />;
  
  return <div>
    <Provider store={props.store}>
      <Styles>
        <Titlebar title="Title" />
        
        <div style={{paddingTop:120}}>
          <Router history={props.history}>
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
        
        {tools}
      </Styles>
    </Provider>
  </div>;
}
