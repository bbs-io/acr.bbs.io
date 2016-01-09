import React, { Component } from 'react';
import { connect } from 'react-redux';

import window from 'global/window';
import _ from 'lodash';
import { changed } from '../actions/window';

export class WindowEvents extends Component {

  constructor() {
    super();
    this.onChange = _.debounce(()=>{ changed(this.props.dispatch); }, 50);
  }

  componentDidMount(){
    if (!window) return;
    window.addEventListener('resize', this.onChange, true);
    window.addEventListener('scroll', this.onChange, true);
  }

  componentWillUnmount(){
    if (!window) return;
    window.removeEventListener('resize', this.onChange, true);
    window.removeEventListener('scroll', this.onChange, true);
  }
  
  render() {
    return React.createElement('window-events-component', {style:{display:'none'}});
  }
}

export default connect(()=>({}))(WindowEvents);
