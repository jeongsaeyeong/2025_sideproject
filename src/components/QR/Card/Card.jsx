import React from 'react'
import Plus from '../../../assets/img/home/card_plus.svg'
import Manage from '../../../assets/img/home/btn_management.svg'
import Card01 from '../../../assets/img/home/card01_big.png'
import Card02 from '../../../assets/img/home/card02_big.png'
import Card03 from '../../../assets/img/home/card03_big.png'
import { Link } from 'react-router-dom'
import Header from '../../Section/Header'

const Card = () => {

    return (
        <>
            <Header />
            <div className='Card_wrap container'>
                <div className="main">
                    <div className="top">
                        <h1>결제수단</h1>
                        <Link to='/card_plus'><img src={Plus} alt="" /></Link>
                    </div>
                    <div className="bottom">
                        <Link className='first' to='/card_detail/01'><img src={Card01} alt="" /></Link>
                        <Link className='two' to='/card_detail/02'><img src={Card02} alt="" /></Link>
                        <Link className='third' to='/card_detail/03'><img src={Card03} alt="" /></Link>
                    </div>
                </div>
                <Link to='/card_management'>
                    <img src={Manage} alt="" />
                    <p>카드 관리</p>
                </Link>
            </div>
        </>
    )
}

export default Card