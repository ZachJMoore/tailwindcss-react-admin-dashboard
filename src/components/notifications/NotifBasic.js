import React from "react";

let NotifBasic = props => (
    <div className={"flex flex-col justify-between w-full p-2 py-4 pr-8 my-2 shadow-md overflow-hidden rounded relative " + props.className}>
        <div className="flex items-center">
            {props.icon && <i className={"text-2xl mr-2 " + props.icon}></i>}
            <span>
                {props.children}
            </span>
        </div>
        <div className="flex">
            {props.buttons && props.buttons.map((button, index)=><button className={"py-1 px-4 mr-2 mt-2 border rounded-full hover:bg-grey-light " + button.className} onClick={button.onClick} key={index} style={{color: "inherit"}}>{button.children}</button>)}
        </div>
        <div>
            {props.close && <button onClick={props.close} className="flex items-center justify-center rounded-full hover:bg-grey-light h-6 w-6 absolute pin-r pin-t m-1" style={{color: "inherit"}} ><i className="fas fa-times"></i></button>}
        </div>
    </div>
)

export default NotifBasic;