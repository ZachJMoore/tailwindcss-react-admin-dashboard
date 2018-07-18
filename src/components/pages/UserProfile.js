import React, { Component } from 'react';
import BreadCrumb from '../navigation/BreadCrumb';

class UserProfile extends Component {

  constructor(props){
    super(props);
    this.state = {
      company: "NothingWorks Inc.",
      title: "Developer",
      username: "@adamwathan",
      email: "example@domain.com",
      firstName: "Adam",
      lastName: "Wathan",
      city: "",
      country: "",
      areaCode: "",
      aboutMe: "Building @tailwindcss, teaching Test-Driven Laravel, and hosting @fullstackradio. Still listening to Slayer."
    }
    this.updateItem = (event, item) =>{
      event.preventDefault()
      let obj = {};
      obj[`${item}`] = event.target.value
      this.setState(obj)
    }
  }

  render() {
    return (
      <>
        <BreadCrumb />
        <div className="flex flex-wrap items-start justify-start">
          <div className="flex w-full md:w-1/2 px-2 my-2">
            <div className="flex flex-1 items-center justify-center flex-col rounded shadow-lg px-4">
              <img className="black h-32 shadow rounded-full mt-8 mb-4" src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" />
              <span className="text-grey text-center">{this.state.title} at {this.state.company}</span>
              <div className="flex flex-col my-8 items-center justify-center">
                <span className="text-xl text-center">{this.state.firstName} {this.state.lastName}</span>
                <span className="text-sm text-center text-grey">{this.state.username}</span>
              </div>
              <p className="mb-8 text-center text-grey-darkest">{this.state.aboutMe}</p>
            </div>
          </div>
          <div className="flex w-full md:w-1/2 px-2 my-2">
            <div className="flex w-full flex-col rounded shadow-lg p-4">
              <form onSubmit={(e)=>{e.preventDefault()}}>

                <div className="flex flex-wrap">

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="company">Company</label>
                    <input className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.company} id="company" placeholder="NothingWorks Inc" onChange={(event)=>{this.updateItem(event, "company")}}/>
                  </div>

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="title">Title</label>
                    <input className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.title} id="title" placeholder="Developer" onChange={(event)=>{this.updateItem(event, "title")}}/>
                  </div>

                </div>

                <div className="flex flex-wrap">

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="username">User Name</label>
                    <input className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.username} id="username" placeholder="@adamwathan" onChange={(event)=>{this.updateItem(event, "username")}}/>
                  </div>

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="email">Email</label>
                    <input className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.email} id="email" placeholder="example@domain.com" onChange={(event)=>{this.updateItem(event, "email")}}/>
                  </div>

                </div>

                <div className="flex flex-wrap">

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="firstName">First Name</label>
                    <input className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.firstName} id="firstName" placeholder="Adam" onChange={(event)=>{this.updateItem(event, "firstName")}}/>
                  </div>

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="lastName">Last Name</label>
                    <input className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.lastName} id="lastName" placeholder="Wathan" onChange={(event)=>{this.updateItem(event, "lastName")}}/>
                  </div>

                </div>

                <div className="flex flex-wrap">

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="city">City</label>
                    <input className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.city} id="city" placeholder="New York" onChange={(event)=>{this.updateItem(event, "city")}}/>
                  </div>

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="country">Country</label>
                    <input className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.country} id="country" placeholder="USA" onChange={(event)=>{this.updateItem(event, "country")}}/>
                  </div>

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="areaCode">Area Code</label>
                    <input className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.areaCode} id="areaCode" placeholder="608" onChange={(event)=>{this.updateItem(event, "areaCode")}}/>
                  </div>

                </div>

                  <div className="flex flex-col my-4 mx-2 flex-1 sm:w-full">
                    <label htmlFor="aboutMe">About Me</label>
                    <textarea className="my-1 p-2 rounded bg-grey-lighter" type="text" value={this.state.aboutMe} id="aboutMe" placeholder="I make cool things" onChange={(event)=>{this.updateItem(event, "aboutMe")}}/>
                  </div>

                <button type="submit" className="rounded-full py-2 px-4 text-md border-2 hover:bg-blue-light hover:border-blue-light hover:text-white">Update Profile</button>

              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserProfile;