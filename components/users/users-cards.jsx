import { Link } from "react-router-dom"
const UserCards = ({user})=>{
    return (
        <>
        <h3><Link to={`/users/${user.username}`}>User: {user.username}</Link></h3>
        <Link to={`/users/${user.username}`}><img className='profilePic'src={user.avatar_url}/></Link>
        </>
    )
    }
    
    export default UserCards