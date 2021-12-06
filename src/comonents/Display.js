import React, {Component} from "react";
import './DisplayStyle.css'
function Display(props){
        return(
                   <tr>
                     <td className='thborder'>{props.firstname}</td>
                     <td className='thborder'>{props.lastname}</td>
                     <td className='thborder'>{props.emailId}</td>
                     <td className='thborder'>{props.dateOfBirth}</td>
                   </tr>
        )

}
export default Display