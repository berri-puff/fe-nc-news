
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header'
import Navigation from '../components/nav-bar'
import './App.css'
import Welcome from '../components/welcome-page'
import Articles from '../components/articles/articles-page'
import SingleArticle from '../components/articles/single-article'
import { LoadingProvider } from '../context/loading'
import Comments from '../components/comments/comment-container'
import UsersContainer from '../components/users/users-container'
import SingleUser from '../components/users/single-user'
import { UserProvider } from '../context/user'

function App() {
return (
    <>
    <UserProvider>
    <LoadingProvider>
    <Header/>
    <Navigation/>
    <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle/>}/>
        <Route path='/articles/:article_id/comments' element={<Comments/>}/>
        <Route path='/users' element={<UsersContainer/>}/>
        <Route path='/users/:username' element={<SingleUser/>}/>
    </Routes>
    </LoadingProvider>
    </UserProvider>
    </>
)
}

export default App
