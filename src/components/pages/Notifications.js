import React, { Component } from 'react';
import BreadCrumb from '../navigation/BreadCrumb';
import Notification from '../notifications/Notification';

class Notifications extends Component {
  render() {
    return (<>
      <BreadCrumb />
      <div className="w-full flex flex-wrap my-2">
        <div className="w-full md:w-1/2 px-2 my-2">
          <span className="text-xl">Basic Notifications</span>
          <Notification className="text-grey-darker">
            This is a basic notification.
          </Notification>
          <Notification className="text-grey-darker" close={()=>{console.log("notification closed")}}>
            This is a basic notification with a close button.
          </Notification>
          <Notification className="text-grey-darker" close={()=>{console.log("notification closed")}}>
            Notifications can also be multiple lines. Although, it may defeat the purpose of a notification if they begin to get too large. But the option is entirely up to you.
          </Notification>
          <Notification className="text-grey-darker" close={()=>{console.log("notification closed")}} icon="fas fa-comments">
            Icons can be used to add interest
          </Notification>
          <Notification className="text-grey-darker" close={()=>{console.log("notification closed")}} buttons={[{children: "yes", onClick:()=>{console.log("button pressed")}}, {children: "no", onClick: ()=>{console.log("button pressed")}}]}>
            Button options can also be passed to make actionable notifications.
          </Notification>
        </div>
        <div className="w-full md:w-1/2 px-2 my-2">
          <span className="text-xl">Colored Notifications</span>
          <Notification className="text-white bg-grey-dark" close={()=>{console.log("notification closed")}}>
            .text-white .bg-grey-dark
          </Notification>
          <Notification className="text-white bg-red-light" close={()=>{console.log("notification closed")}}>
            .text-white .bg-red-light
          </Notification>
          <Notification className="text-white bg-orange-dark" close={()=>{console.log("notification closed")}}>
            .text-white .bg-orange-dark
          </Notification>
          <Notification className="text-grey-darkerest bg-yellow" close={()=>{console.log("notification closed")}}>
            .text-grey-darkerest .bg-yellow
          </Notification>
          <Notification className="text-white bg-green-dark" close={()=>{console.log("notification closed")}}>
            .text-white .bg-green-dark
          </Notification>
          <Notification className="text-white bg-teal-darker" close={()=>{console.log("notification closed")}}>
            .text-white .bg-teal-dark
          </Notification>
          <Notification className="text-grey-darkerest bg-blue-lighter" close={()=>{console.log("notification closed")}}>
            .text-grey-darkerest .bg-blue-lighter
          </Notification>
          <Notification className="text-white bg-indigo-dark" close={()=>{console.log("notification closed")}}>
            .text-white .bg-indigo-dark
          </Notification>
          <Notification className="text-white bg-purple-dark" close={()=>{console.log("notification closed")}}>
            .text-white .bg-purple-dark
          </Notification>
          <Notification className="text-white bg-pink-dark" close={()=>{console.log("notification closed")}}>
            .text-white .bg-pink-dark
          </Notification>
        </div>
        <div className="w-full md:w-1/2 px-2 my-2">
          <span className="text-xl">One Of Each</span>
          <Notification className="text-white bg-red-light" close={()=>{console.log("notification closed")}} icon="fas fa-question-circle" buttons={[{children: "Lame", onClick:()=>{console.log("button pressed")}}, {children: "Cool", onClick: ()=>{console.log("button pressed")}}, {children: "Awesome!", onClick: ()=>{console.log("button pressed")}}]}>
            All variations can be combined to customize each individual notification.
            <br />
            Break elements are also supported to add multi line notifications without needing to rely on word wrap.
            <br />
            What do you think?
          </Notification>
        </div>
      </div>
    </>);
  }
}

export default Notifications;