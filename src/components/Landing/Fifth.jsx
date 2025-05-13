import React from 'react'
import Logo_title from '../../assets/img/landing/logo_title.svg'
import Logo_big from '../../assets/img/landing/logo_big.png'
import { Link } from 'react-router-dom'

const Fifth = () => {
    return (
        <div className='Fifth_wrap First_wrap'>
            <div>
                <img className='logo_title' src={Logo_title} alt="" />
                <h1>주문을 새롭게</h1>
            </div>
            <img className='logo_big' src={Logo_big} alt="" />
            <Link to='/login_kind'>시작하기</Link>
        </div>
    )
}

export default Fifth