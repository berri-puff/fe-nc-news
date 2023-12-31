import { Link } from "react-router-dom"
const ArticleCards = ({article}) =>{
    return (
        <section className="card">
        <h3><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h3>
        <Link to={`/articles/${article.article_id}`}><img className='articleImg'src={article.article_img_url}/></Link>
        <p>By : {article.author}</p>
        <p>Comments : {article.comment_counts}</p>
        </section>
    )
}
export default ArticleCards