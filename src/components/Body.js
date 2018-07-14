import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
        <div className="flex items-start justify-start flex-1 overflow-y-auto shadow-inner">
            {this.props.children}
        </div>
    );
  }
}

export default Body;