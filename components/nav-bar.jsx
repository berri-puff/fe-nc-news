import { Link } from "react-router-dom"

const Navigation = () =>{
    return (
        <nav className="nav-bar">
             <Link to='/' className="nav-buttons">Home</Link>
        <Link to='/topics' className="nav-buttons">Topics</Link>
        <Link to='/articles'className="nav-buttons">Articles</Link>
        {/* <Link to='/users'className="nav-buttons">Users</Link> */}
        </nav>
       
    )
}
export default Navigation