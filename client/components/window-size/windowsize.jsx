import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';



class WindowSizeComponent extends Component {
  
  static defaultProps = {
    windowWidth: 300
  };
  
  static propTypes = {
    style: React.PropTypes.object,
    windowWidth: PropTypes.number,
    windowHeight: PropTypes.number
  };

  render() {
    let {windowWidth, windowHeight} = this.props;
    let size = `${windowWidth}x${windowHeight}`;
    
    return <div style={this.props.style}>
      {size}
    </div>
  }
}

//connect state from redux to properties
export const WindowSize = connect(state => ({
  windowWidth: state.window.size.width,
  windowHeight: state.window.size.height
}))(WindowSizeComponent);