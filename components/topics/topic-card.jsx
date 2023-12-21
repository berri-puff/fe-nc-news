import { Link } from "react-router-dom"
const TopicsCard = ({topic})=>{
return(
    <section>
    <h3><Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link></h3>
    <p>{topic.description}</p>
    </section>
) 

}
export default TopicsCard