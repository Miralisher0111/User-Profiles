import UserList from '../Profile/UserList';
import './Card.css'
const Card=(props)=>{
    const aboutUserHandler=(user)=>{
        props.getUSer(user);
    }
return (
    <div className='card'>
        {props.userList.map((user)=> <UserList key={user.id} user={user} 
        onShowUserInfo={props.onShowUserInfo} aboutUser={aboutUserHandler}></UserList>)}
    </div>
)
}


export default Card;