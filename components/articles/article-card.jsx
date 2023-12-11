
const ArticleCards = ({article}) =>{
    return (
        <section className="article">
        <h3>{article.title}</h3>
        <img className='articleImg'src={article.article_img_url}/>
        <p>By : {article.author}</p>
        <p>Comments : {article.comment_counts}</p>
        </section>
    )
}
export default ArticleCards