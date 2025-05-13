import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Login_Choose from './components/User/Login/Login_Choose'
import Login from './components/User/Login/Login'
import Join from './components/User/Login/Join'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/login_kind' element={<Login_Choose />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/join' element={<Join />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App