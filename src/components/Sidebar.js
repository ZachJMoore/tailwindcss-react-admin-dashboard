import React, { Component } from 'react';
import { Link } from "react-router-dom";
import mountainBg from "../images/mountains-bg.jpg";

class Sidebar extends Component {
  render() {
    return (
      <nav className={"sidebar-container border-r overflow-y-auto lg:w-1/5 absolute sm:relative bg-cover bg-no-repeat bg-top bg-white " + (this.props.sidebarIsShown ? "hidden sm:flex" : "flex sm:hidden")} style={{backgroundImage: `url(${mountainBg})`}}>
        <ul className="list-reset flex-1 mx-2 z-10">
          {this.props.pages.map((page, index)=><LinkItem page={page} key={index} location={this.props.location}/>)}
        </ul>
      </nav>
    );
  }
}

let LinkItem = ({page, location}) => (
  <li>
    <Link to={page.path} className={"flex items-center justify-start p-4 my-2 rounded no-underline" + (location.pathname === page.path ? " bg-blue-light text-white" : " text-grey-darker hover:bg-grey-lighter")}>
      <i className={page.iconClass + " px-1"} />
      <span className="px-1">{page.name}</span>
    </Link>
  </li>
)

export default Sidebar;