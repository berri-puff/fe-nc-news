import { useContext, useEffect, useState } from "react"
import { getAllUsers } from "../../utils/api"
import { LoadingContext } from "../../context/loading"
import {Spinner} from '@chakra-ui/react'
import { Link } from "react-router-dom"


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
        return <Spinner
        thickness='4px'
        speed='0.85s'
        emptyColor='purple.50'
        color='purple.300'
        size='xl'
      />
    }
    else {
        return (
        <section>
         <>
            {users.map((user)=>{
               return <>
               <h3><Link to={`/users/${user.username}`}>{user.username}</Link></h3>
        <Link to={`/users/${user.username}`}><img className='profilePic'src={user.avatar_url}/></Link>
               </>
            })}
        </>
        </section>
       
    )  
    }
  
}

export default UsersContainer