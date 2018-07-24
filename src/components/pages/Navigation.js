import React, { Component } from 'react';
import BreadCrumb from '../navigation/BreadCrumb';
import DropDown from '../navigation/DropDown';

class Navigation extends Component {
  render() {
    return (
      <>
      <BreadCrumb />
      <div className="w-full flex flex-wrap my-2">

        <div className="w-full md:w-1/2 px-2 my-2 flex flex-col">
          <span className="text-xl mb-4">Drop Down Menus</span>

          <DropDown title="Basic Drop Down" contentClasses="bg-white" className="mt-4">
            <span>Expands to any html element passed</span>
          </DropDown>

          <DropDown title="Styled Button" btnClasses="bg-blue-light text-white hover:bg-red-light" contentClasses="bg-white" className="mt-4">
            <span>Heres a styled button</span>
          </DropDown>


          <DropDown title="Styled Content Container" contentClasses="bg-grey-darkest text-white" className="mt-4">
            <span>Heres a styled container</span>
          </DropDown>
        </div>

        <div className="w-full md:w-1/2 px-2 my-2 flex flex-col">
          <span className="text-xl mb-4">Bread Crumbs</span>

          <span className="text-base">A BreadCrumb component without any props will use withRouter to generate the structure</span>
          <BreadCrumb />

          <span className="text-base">However, it can be passed a custom path formatted as follows: "/a/custom/path"</span>
          <BreadCrumb path="/a/custom/path"/>

          <span className="text-base">A link to the root path is by default always created but can be hidden by passing rootIsShown as false</span>
          <BreadCrumb rootIsShown={false} />
        </div>

      </div>
      </>
    );
  }
}

export default Navigation;