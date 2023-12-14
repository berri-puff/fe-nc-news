import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/user";

const Navigation = () =>{
    const {user} = useContext(UserContext)
    return (
        <nav className="nav-bar">
        <Link to='/' className="nav-buttons">Home</Link>
        <Link to='/topics' className="nav-buttons">Topics</Link>
        <Link to='/articles'className="nav-buttons">Articles</Link>
        <Link to='/users'className="nav-buttons">Users</Link>
        {user.length === 0 ? <p className='loginMSG'>You are not <Link to='/users'>logged in!</Link></p>:<p className='loginMSG'>You are logged in as {user.username}</p> }
        </nav>
       
    )
}
export default Navigation