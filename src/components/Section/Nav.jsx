import React from 'react'
import { Link } from 'react-router-dom'
import Main from '../../assets/img/home/nav/link_main.svg'
import Qr from '../../assets/img/home/nav/link_qr.svg'
import Order from '../../assets/img/home/nav/link_order.svg'
import Mypage from '../../assets/img/home/nav/link_mypage.svg'

const Nav = () => {
    return (
        <div className='Nav_wrap'>
            <div>
                <Link to='/'><img src={Main} alt="" /></Link>
                <Link to='/qr_main'><img src={Qr} alt="" /></Link>
                <Link to='/order_done'><img src={Order} alt="" /></Link>
                <Link to='/mypage'><img src={Mypage} alt="" /></Link>
            </div>
        </div>
    )
}

export default Nav