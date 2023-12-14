import  axios  from "axios";

const app = axios.create({
  baseURL: "https://hot-issue.onrender.com/api",
});

export const getsAllArticles = (query) =>{
    if (query){
        return app.get(`/articles?topic=${query}`).then(({data})=>{
            return data.articles
        })
    }
    else {
       return app.get('/articles').then(({data})=>{
        return data
    }) 
    }
    
}

export const getAnArticleById = (id) =>{
 return app.get(`/articles/${id}`).then(({data})=>{
    return data
 })
}

export const getCommentsByArticleId = (id)=>{
    return app.get(`articles/${id}/comments`).then(({data})=>{
        return data.comments
    })
}

export const patchArticleVote = (id, likeAmount)=>{
    const likeButton = {inc_votes: likeAmount}
    return app.patch(`/articles/${id}`, likeButton).then(({data}) =>{
        return data.article
    })
}

export const postsNewComment = (id, newComment, user)=>{
    const commentToAdd = {
        username: `${user}`,
        body: newComment
    }
    return app.post(`/articles/${id}/comments`, commentToAdd).then(({data})=>{
        return data.comment
    })
}

export const getAllUsers = () =>{
    return app.get('/users').then(({data})=>{
        return data.users
    })
}

export const getUserByUsername = (username) =>{
    return app.get(`/users/${username}`).then(({data})=>{
        return data.user
    })
}

export const deleteCommentByID = (id)=>{
    return app.delete(`/comments/${id}`)
}

export const getAllTopics = ()=>{
    return app.get(`/topics`).then(({data})=>{
        return data.topics
    })
}


