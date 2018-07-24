import React, { Component } from "react"

class DropDown extends Component{

    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
        this.id = (Math.random() * 1000000000).toFixed(0)
        this.toggleIsOpen = ()=>{this.setState({isOpen: !this.state.isOpen})}
    }

    render(){
        return (
            <div className={"relative " + this.props.className}>
                <button className={"h-10 px-2 border rounded text-center " + this.props.btnClasses} onClick={this.toggleIsOpen}>{this.props.title}</button>
                <div className={"absolute flex-col rounded shadow z-20 mt-10 p-4 pin-t pin-l " + (this.state.isOpen ? "flex " : "hidden ") + this.props.contentClasses}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}


export default DropDown