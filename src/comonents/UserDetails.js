import React,{Component} from 'react';
import Display from './Display';
import './DisplayStyle.css'

class UserDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            user : {
                firstname :'',
                lastname  :'',
                emailId   :'',
                dateOfBirth :''
            },
            users : [],
        }
    }
    handleFirstnameChange = (event)=>{
        let tempUser = this.state.user;
        tempUser.firstname=event.target.value;
        this.setState({user:tempUser});
   
    }

    handleLastnameChange = (event)=>{
        let tempUser = this.state.user;
        tempUser.lastname=event.target.value;
        this.setState({user:tempUser});
    }

    handleEmailidChange = (event)=>{
        let tempUser = this.state.user;
        tempUser.emailId=event.target.value;
        this.setState({user:tempUser});
    }
    handleDateOfBirthChange = (event)=>{
        let tempUser = this.state.user;
        tempUser.dateOfBirth=event.target.value;
        this.setState({user:tempUser});
    }
    changeShowDisplay=(event)=>{
       let temp = this.state.users;
       temp.push(this.state.user); 
       this.setState(
           {users:temp,user:{}}
       ) 
      
    }
    render(){
        return(
        <div>
         <form>
             <div className='fname'>
                <lable >FirstName:</lable>
                <input type='text' value={this.state.user.firstname} onChange={this.handleFirstnameChange}></input>  
             </div>   
             <div className='lname'>
                <lable>LastName:</lable>
                <input type='text' value={this.state.user.lastname} onChange={this.handleLastnameChange}></input>
             </div>
             <div className='email'> 
                <lable> Email-Id:</lable>
                <input type='text' value={this.state.user.emailId} onChange={this.handleEmailidChange}></input>
             </div>
             <div className='dob'>
                <lable>Date Of Birth:</lable>
                <input type='date' value={this.state.user.dateOfBirth} onChange={this.handleDateOfBirthChange}></input>
             </div>
         </form>
         <button onClick={()=>this.changeShowDisplay()} className='save'>Save</button>
         <table className='table'>
           <thead>
               <tr>
                   <th className='thborder'>FirstName</th>
                   <th className='thborder'>LastName</th>
                   <th className='thborder'>EmailId</th>
                   <th className='thborder'>DateOfBirth</th>
               </tr>
           </thead>
           <tbody>
            {this.state.users.map((user)=>{  return<Display key={user.lastname} {...user}/>})}
           </tbody>
         </table>
        </div>
        )
    }
}

export default UserDetails