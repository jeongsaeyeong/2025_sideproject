import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Login_Choose from './components/User/Login/Login_Choose'
import Login from './components/User/Login/Login'
import Join from './components/User/Login/Join'
import FindPass from './components/User/FindPass/FindPass'
import Step01 from './components/User/FindPass/Step01'
import Step02 from './components/User/FindPass/Step02'
import Step03 from './components/User/FindPass/Step03'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing />}/>
                <Route path='/login_kind' element={<Login_Choose />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/join' element={<Join />}/>
                <Route path='/findpass' element={<FindPass />}/>
                <Route path='/findpass_check' element={<Step01 />}/>
                <Route path='/pass_reset' element={<Step02 />}/>
                <Route path='/reset_done' element={<Step03 />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App