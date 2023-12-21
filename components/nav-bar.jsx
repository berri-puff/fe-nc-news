import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../context/user";

const Navigation = () =>{
    const {user} = useContext(UserContext)
    return (
        <nav>
        <Link to='/' className="nav-buttons">Home</Link>
        <Link to='/topics' className="nav-buttons">Topics</Link>
        <Link to='/articles'className="nav-buttons">Articles</Link>
        <Link to='/users'className="nav-buttons">Users</Link>
        {user.length === 0 ? <p>You are not <Link to='/users'className="login-link">logged in!</Link></p>:<p>You are logged in as <span className="logged-in">{user.username}</span></p> }
        </nav>
       
    )
}
export default Navigation