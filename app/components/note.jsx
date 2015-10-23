import React from 'react';

export default class Note extends React.Component {
  render() {
    return <code>Test: {this.props.dtm}</code>;
  }
}
