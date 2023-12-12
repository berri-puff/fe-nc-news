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
        console.log(err)
    })
}

export const increaseArticleVote = (id)=>{
    const likeButton = {inc_votes: 1}
    return app.patch(`/articles/${id}`, likeButton).then(({data}) =>{
        return data.article
    }).catch((err) =>{
        console.log(err)
    })
}

export const decreaseArticleVote =(id) =>{
const dislikeButton = {inc_votes:-1}
return app.patch(`/articles/${id}`, dislikeButton).then(({data}) =>{
    return data.article
}).catch((err) =>{
    console.log(err)
})
}