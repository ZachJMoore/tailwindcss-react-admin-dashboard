import React, { Component } from 'react';

class Body extends Component {
  render() {
    return (
        <div className="body-container flex flex-col items-start justify-start flex-1 overflow-y-auto p-1">
          <div className="min-h-full min-w-full max-w-full">
            {this.props.children}
          </div>
        </div>
    );
  }
}

export default Body;