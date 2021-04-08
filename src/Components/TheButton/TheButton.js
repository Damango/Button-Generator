import React, {useState} from 'react';
import "./TheButton.css"
const TheButton = (props) => {


   



function changeClass(){




}

    return ( <div onMouseEnter={ () => {props.changeClass(1)}} onMouseLeave={ () => {props.changeClass(2)}} className="the-button-container" style={props.theStyles}><span>{props.buttonText}</span>{props.icon}</div> );
}
 
export default TheButton;