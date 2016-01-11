import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class WindowSize extends Component {
  
  static contextTypes = {
    freeStyle: PropTypes.object
  };
  
  static defaultProps = {
    windowWidth: 300
  };
  
  static propTypes = {
    style: React.PropTypes.object,
    windowWidth: PropTypes.number,
    windowHeight: PropTypes.number
  };

  render() {
    var className = this.context.freeStyle.registerStyle({
      border: '1px solid rgba(60,60,60,0.5)',
      borderRadius: 5
    });
    
    let {window} = this.props;
    
    let size = `${window.size.width}x${window.size.height} (${window.position.left},${window.position.top})`;
    
    return <div className={className} style={this.props.style}>
      {size}
    </div>
  }
}

//connect state from redux to properties
export default connect(state => ({
  window: state.window
}))(WindowSize);