import React, {Component} from "react";
import './DisplayStyle.css'
function Display(props){
        return(
               <div>
                   <p>{props.firstname} ----  {props.lastname} ---- {props.emailId} ---- {props.dateOfBirth}</p>
                </div>
    
        )

}
export default Display