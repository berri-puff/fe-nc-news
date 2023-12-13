import { useEffect, useState } from "react"
import { getAllUsers } from "../../utils/api"
import UserCards from "./users-cards"



const UsersContainer = ()=>{
    const [users, setUsers] = useState([])
    useEffect(()=>{
        getAllUsers().then((receivedUsers)=>{
            setUsers(receivedUsers)
        })
    }, [])

    return (
        <section>
        <h2>All Users</h2>
         <ul className="allUsers">
            {users.map((user)=>{
               return <UserCards key={user.username} user={user}/>
            })}
        </ul>
        </section>
       
    )
}

export default UsersContainer