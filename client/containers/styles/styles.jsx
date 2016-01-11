import React, { PropTypes, Component } from 'react';
import { create as createStyle } from 'react-free-style';

const Style = createStyle();

// Create a React component (also rendering the `Style.Element` component).
export class Styles extends Component {
  
  static childContextTypes = {
    theme: PropTypes.object
  };
  
  render() {
    console.log('freestyle-context', this.context.freeStyle);
    //
    
    return <div>
      {this.props.children}
      <Style.Element />
      <div>FIND ME</div>
    </div>
  }
  
}

export default Style.component(Styles);
