import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing/Landing'
import Login_Choose from './components/User/Login/Login_Choose'
import Login from './components/User/Login/Login'
import Join from './components/User/Login/Join'
import FindPass from './components/User/FindPass/FindPass'
import Step01 from './components/User/FindPass/Step01'
import Step02 from './components/User/FindPass/Step02'
import Step03 from './components/User/FindPass/Step03'
import QR_Main from './components/QR/QR_Main'
import Nav from './components/Section/Nav'
import Card from './components/QR/Card/Card'
import Card_Puls from './components/QR/Card/Card_Puls'
import Card_Detail from './components/QR/Card/Card_Detail'
import Card_Plus_Done from './components/QR/Card/Card_Plus_Done'
import Mypage from './components/User/Mypage/Mypage'
import Modify_Profile from './components/User/Mypage/Modify_Profile'
import Scrap from './components/User/Mypage/Scrap'
import Coupon from './components/User/Mypage/Coupon'
import Card_Manage from './components/QR/Card/Card_Manage'
import Order from './components/QR/Order/Order'
import Detail from './components/QR/Order/Detail'
import Cart from './components/QR/Order/Cart'
import UseCou from './components/QR/Order/UseCou'
import Buy from './components/QR/Order/Buy'
import Done from './components/QR/Order/Done'
import Main from './components/Home/Main'
import Search from './components/Home/Search'
import Main_Detail from './components/Home/Main_Detail'
import Recent from './components/Home/Recent'
import Reveiw from './components/Home/Reveiw'
import Review_W from './components/Home/Review_W'
import Bell from './components/Bell/Bell'
import BellDetail from './components/Bell/BellDetail'

const App = () => {
    const [onLogin, setOnLogin] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                {/* Landing */}
                <Route path='/' element={<Landing onLogin={onLogin} />} />
                <Route path='/login_kind' element={<Login_Choose />} />
                <Route path='/login' element={<Login />} />
                <Route path='/join' element={<Join />} />
                <Route path='/findpass' element={<FindPass />} />
                <Route path='/findpass_check' element={<Step01 />} />
                <Route path='/pass_reset' element={<Step02 />} />
                <Route path='/reset_done' element={<Step03 />} />

                {/* qr */}
                <Route path='/qr_main' element={<QR_Main />} />
                <Route path='/card' element={<Card />} />
                <Route path='/card/:page' element={<Card_Detail />} />
                <Route path='/card_plus' element={<Card_Puls />} />
                <Route path='/card_plus_done' element={<Card_Plus_Done />} />
                <Route path='/card_management' element={<Card_Manage />} />
                <Route path='/order' element={<Order />} />
                <Route path='/order_detail/:id' element={<Detail />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/use_coupon' element={<UseCou />} />
                <Route path='/buy' element={<Buy />} />
                <Route path='/order_done' element={<Done />} />

                {/* Mypage */}
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/profile_modify' element={<Modify_Profile />} />
                <Route path='/scrap' element={<Scrap />} />
                <Route path='/coupon' element={<Coupon />} />

                {/* home */}
                <Route path='/main' element={<Main />} />
                <Route path='/search' element={<Search />} />
                <Route path='/main_detail' element={<Main_Detail />} />
                <Route path='/recent' element={<Recent />} />
                <Route path='/review' element={<Reveiw />} />
                <Route path='/review_write' element={<Review_W />} />

                {/* bell */}
                <Route path='/bell' element={<Bell />} />
                <Route path='/bell_detail' element={<BellDetail />} />
                
            </Routes>
            {onLogin ? (<Nav />) : (<></>)}
        </BrowserRouter>
    )
}

export default App