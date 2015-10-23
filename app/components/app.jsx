import React from 'react';
import Note from './note';

export default class App extends React.Component {
  render() {
    const props = this.props;
    
    return <div>
      <Note {...props} />
    </div>;
  }
}