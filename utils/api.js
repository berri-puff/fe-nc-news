import  axios  from "axios";

const app = axios.create({
  baseURL: "https://hot-issue.onrender.com/api",
});

export const getsAllArticles = () =>{
    return app.get('/articles').then(({data})=>{
        return data
    }).catch((err) =>{
        console.log(err)
    })
}

export const getAnArticleById = (id) =>{
 return app.get(`/articles/${id}`).then(({data})=>{
    return data
 }).catch((err) =>{
    console.log(err)
 })
}

export const getCommentsByArticleId = (id)=>{
    return app.get(`articles/${id}/comments`).then(({data})=>{
        return data.comments
    }).catch((err)=>{
        return err
    })
}

export const patchArticleVote = (id, likeAmount)=>{
    const likeButton = {inc_votes: likeAmount}
    return app.patch(`/articles/${id}`, likeButton).then(({data}) =>{
        return data.article
    }).catch((err)=>{
        next(err)
    })
}

export const postsNewComment = (id, newComment)=>{
    const commentToAdd = {
        username: 'happyamy2016',
        body: newComment
    }
    return app.post(`/articles/${id}/comments`, commentToAdd).then(({data})=>{
        return data.comment
    })
}