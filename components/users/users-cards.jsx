import { Link } from "react-router-dom"
const UserCards = ({user})=>{
    return (
        <section className="user-card">
        <h3><Link to={`/users/${user.username}`}>{user.username}</Link></h3>
        <Link to={`/users/${user.username}`}><img className='profilePic'src={user.avatar_url}/></Link>
        </section>
    )
    }
    
    export default UserCards