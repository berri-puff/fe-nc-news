
import { Route, Routes } from 'react-router-dom'
import Header from '../components/header'
import Navigation from '../components/nav-bar'
import './App.css'
import Welcome from '../components/welcome-page'
import Articles from '../components/articles/articles-page'

function App() {
return (
    <>
    <Header/>
    <Navigation/>
    <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/articles' element={<Articles/>}/>
    </Routes>
    </>
)
}

export default App
