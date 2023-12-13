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
