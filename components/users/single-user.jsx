import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../../utils/api";
import { UserContext } from "../../context/user";

const SingleUser = ()=>{
    const {username} = useParams()
    const [singleUser, setSingleUser] = useState([]) 
    const {user, setUser} = useContext(UserContext)
    useEffect(()=>{
        getUserByUsername(username).then((receivedUser)=>{
            setSingleUser(receivedUser)
        })
    }, [])

    function userLogIn (){
        setUser(singleUser)
    }

    return (
        <section>
        <h2>Name: {singleUser.name}</h2>   
        <img className="profilePic" src={singleUser.avatar_url} onClick={userLogIn}/>
        <h3>Username: {singleUser.username}</h3>
        </section>
       
    )
}

export default SingleUser