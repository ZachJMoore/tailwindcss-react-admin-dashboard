import React from "react";
import { withRouter, Link } from "react-router-dom"

let BreadCrumb = props => (
    <div className="w-full flex items-center justify-start">
        <div className="flex items-center justify-start m-2">
            {props.rootIsShown !== false && <Link to="/" className="no-underline capitalize text-blue-lighter hover:underline">home</Link>}
            {(props.path ? props.path : props.location.pathname).split("/").map((pathname,index)=>{

                let locationArray = (props.path ? props.path : props.location.pathname).split("/")

                let getPath = ()=>{
                    let path = ""
                    for (let i = 1; i <= index; i++){
                        path += `/${locationArray[i]}`
                    }
                    return path
                }

                if(pathname === ""){
                    return null
                } else if (index + 1 !== locationArray.length){
                    return (
                        <span key={index} className="flex items-center text-grey-dark ml-1">/<Link to={getPath()} className="no-underline capitalize text-blue-lighter hover:underline ml-1">{pathname}</Link></span>
                    )
                } else {
                    return (
                        <span key={index} className="flex items-center text-grey-dark ml-1">/<span className="capitalize text-grey ml-1">{pathname}</span></span>
                    )
                }
            })}
        </div>
    </div>
)

export default withRouter(BreadCrumb)