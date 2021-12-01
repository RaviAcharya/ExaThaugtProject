import React,{Component} from 'react';
import Display from './Display';

class UserDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            user : {
                firstname :'',
                lastname  :'',
                emailId   :'',
                dateOfBirth : Date
            },
            showDisplay:false,
            users : []
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
        console.log(this.state.user.dateOfBirth);
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
            <div>
                  FirstName:
                  <input type='text' value={this.state.user.firstname} onChange={this.handleFirstnameChange}></input> 
            </div>
            <div>      
                  LastName:
                  <input type='text' value={this.state.user.lastname} onChange={this.handleLastnameChange}></input>
            </div>      
             <div>
                 EmailId:
                 <input type='text' value={this.state.user.emailId} onChange={this.handleEmailidChange}></input>
             </div>
             <div>
                 Date Of Birth:
                 <input type='date' value={this.state.user.dateOfBirth} onChange={this.handleDateOfBirthChange}></input>
             </div>
         </form>

         <button onClick={()=>this.changeShowDisplay()}>Save</button>
         {this.state.users.map(user=>{return <Display key={user.firstname} {...user}/>})}
        </div>
        )
    }
}

export default UserDetails