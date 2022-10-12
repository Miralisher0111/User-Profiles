import { Fragment, useState } from 'react'
import './UserList.css'
const UserList=(props)=>{
    const{first_name,last_name,avatar}=props.user

    const[btnState,setBtnState]=useState(false);
    const onClickhandler=()=>{
        setBtnState(true);
        props.onShowUserInfo(btnState);
        props.aboutUser(props.user)
    }
    
    return (<Fragment>
          
        
        <div className='user-card'>
        <img className='profile-photo' src={avatar} alt='test'></img>
        <div className='user-info'>{first_name} {last_name}</div>
        <button type='button' className='btn' onClick={onClickhandler}>More Info</button>
        </div>
    </Fragment>
          
    
    )
}



export default UserList;




