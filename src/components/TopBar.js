import React, { Component } from 'react';
import DropDown from './navigation/DropDown';

class TopBar extends Component {
  render() {
    return (
        <div className="top-bar-container py-2 flex border-b items-center justify-between">

            <button className="flex items-center justify-center p-2 mx-2 border rounded" onClick={this.props.toggleSidebar}>
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="fill-current h-4 w-4">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
            </button>

            <a href="https://tailwindcss.com/" className="uppercase text-grey p-2 mx-2 text-3xl hover:text-blue-light">
                <svg className="fill-current h-10" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path>
                </svg>
            </a>

            <a href="https://github.com/ZachJMoore/tailwindcss-react-admin-dashboard" className="uppercase text-grey p-2 mx-2 text-3xl hover:text-blue-light"><i className="fab fa-github"></i></a>
        </div>
    );
  }
}

export default TopBar;