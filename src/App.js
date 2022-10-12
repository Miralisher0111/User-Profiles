import React, { useEffect, useState} from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Modal from './Components/Card/modal';

function App() {
//   const GetUserHandler= async function(){
// const response=await fetch('https://reqres.in/api/users?page=2')
// .then((response)=>response.json())
// .catch((err)=>console.log(err))
//   }

const [users, setUsers]=useState([]);
const [onModal,setOnModal]=useState();
const[userInfo,setUserInfo]=useState({})

const onClickHandler=(state)=>{
  setOnModal(state)

}

const getUserHandler=(user)=>{
  setUserInfo(user);
  
}


const usersList= async()=>{
  try {
    fetch('https://reqres.in/api/users?page=2').then(async res => {
      const {data} = await res.json();
      setUsers(data)
    })
  } catch(e) {
      console.log(e);
  }
}

useEffect(function() {
  usersList()
}, [])


  return (
    <div className="App">
        <Card userList={users} onShowUserInfo={onClickHandler} getUSer={getUserHandler}></Card>
        <Modal openModal={onModal} oncloseModal={onClickHandler} userInfo={userInfo}>

        </Modal>
    </div>
  );
}

export default App;
