import { useContext, useEffect, useState } from "react"
import { getAllUsers } from "../../utils/api"
import UserCards from "./users-cards"
import { LoadingContext } from "../../context/loading"



const UsersContainer = ()=>{
    const [users, setUsers] = useState([])
    const {isLoading, setIsLoading} = useContext(LoadingContext)
    useEffect(()=>{
        setIsLoading(true)
        getAllUsers().then((receivedUsers)=>{
            setUsers(receivedUsers)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) {
        return <h2>Fetching...</h2>
    }
    else {
        return (
        <section>
        <h2>All Users:</h2>
         <ul className="container">
            {users.map((user)=>{
               return <UserCards key={user.username} user={user}/>
            })}
        </ul>
        </section>
       
    )  
    }
  
}

export default UsersContainer