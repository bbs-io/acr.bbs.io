import React, { Component, PropTypes } from 'react';
import { AppBar, EnhancedButton, Tabs, Tab } from 'material-ui';
import { AppToolbar } from './toolbar';
import { AccountCircleIcon } from '../icons';
import { connect } from 'react-redux';
import { pushPath } from 'redux-simple-router';

class TitlebarComponent extends Component {
    
  static defaultProps = {
    title: 'Application Title',
    windowWidth: 300
  };

  static propTypes = {
    title: PropTypes.string,
    windowWidth: PropTypes.number,
    routing: PropTypes.object
  };

  handleTab = (tab) => {
    //console.log('handleTab', tab.props.route);
    //console.log(pushPath(tab.props.route));
    this.props.dispatch(pushPath(tab.props.route));
  };
  
  currentTabIndex = () => {
    switch (this.props.routing.path) {
      case '/bar': return 2;
      case '/foo': return 1;
    }
    return 0;
  };

  render() {
    
    return <div
      style={{
        position:'fixed',
        width:'100%'
      }}
    >
      <AppBar
        title={this.props.title}
        iconElementRight={
          <div 
            className={{}}
            style={{
              position:'relative',
              top:-6,
              left:-8,
              width:58,
              height:58,
              padding:0,
              marginBottom:-20,
              overflow:'hidden',
              border:'1px transparent solid',
              backgroundColor: 'rgba(255,255,255,0.3)',
              borderRadius:'50%'
            }}
          >
            <EnhancedButton
              touch={true}
              style={{
                position:'relative',
                top:-5,
                left:-9,
                minWidth:0
              }}
            >
              <i style={{fontSize:64,color:'rgba(0,0,0,0.3)'}} className="material-icons">account_circle</i>
            </EnhancedButton>
          </div>
        }
      />
      <Tabs initialSelectedIndex={this.currentTabIndex()}>
        <Tab
          label="Home"
          route="/"
          onActive={this.handleTab} />
        <Tab
          label="Foo"
          route="/foo"
          onActive={this.handleTab} />
        <Tab
          label="Bar"
          route="/bar"
          onActive={this.handleTab} />
      </Tabs>
    </div>;
  }
  //<AppToolbar windowWidth={this.props.windowWidth} />
  //<AccountCircleIcon style={{width:100, height:100}} />
  //iconElementLeft={<IconButton iconClassName="material-icons">menu</IconButton>}
  //iconElementRight={<IconButton iconClassName="material-icons">more_vert</IconButton>}
    
}; //TitlebarComponent

//connect state from redux to properties
export const Titlebar = connect(state => ({
  windowWidth: state.window.size.width,
  routing: state.routing
}))(TitlebarComponent);