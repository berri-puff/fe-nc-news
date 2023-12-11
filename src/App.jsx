
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header'
import Navigation from '../components/nav-bar'
import './App.css'
import Welcome from '../components/welcome-page'
import Articles from '../components/articles/articles-page'
import SingleArticle from '../components/articles/single-article'
import { LoadingProvider } from '../context/loading'

function App() {
return (
    <>
    <LoadingProvider>
    <Header/>
    <Navigation/>
    <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/articles' element={<Articles/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle/>}/>
    </Routes>
    </LoadingProvider>
    </>
)
}

export default App
