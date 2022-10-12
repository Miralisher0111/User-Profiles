import React,{useState} from 'react'
import './modal.css'
const Modal=(props)=>{
    const[btnState,setBtnState]=useState(props.openModal);
   const onClickHandler=()=>{
    setBtnState(false);
    props.oncloseModal(btnState);
   }
if(props.openModal){
 let link=`mailto:${props.userInfo.email}`
    return (
        <div className="container-bg">
 <div className='container'>
    <img src={props.userInfo.avatar} alt={props.userInfo.first_name}></img>
    <div className='user-name'>{props.userInfo.first_name}  {props.userInfo.last_name}</div>
    <a href={link}>contact with  {props.userInfo.first_name}</a>
    <div className='btn-wrapper'>
    <button type='button' className='btn' onClick={onClickHandler} >Cancel</button>
    </div>
 
 
 </div>
</div>
    )
}
}

export default Modal;