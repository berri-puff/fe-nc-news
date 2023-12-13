import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserByUsername } from "../../utils/api";

const SingleUser = ()=>{
    const {username} = useParams()
    const [singleUser, setSingleUser] = useState([]) 
    useEffect(()=>{
        getUserByUsername(username).then((receivedUser)=>{
            setSingleUser(receivedUser)
        })
    }, [])

    return (
        <section>
        <h2>Name: {singleUser.name}</h2>   
        <img className="profilePic" src={singleUser.avatar_url}/>
        <h3>Username: {singleUser.username}</h3>
        </section>
       
    )
}

export default SingleUser