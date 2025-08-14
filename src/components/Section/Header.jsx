import React from 'react'
import Profile from '../../assets/img/home/link_profile.svg'
import Bell from '../../assets/img/home/bell.svg'
import Show from '../../assets/img/home/showping.svg'
import Ham from '../../assets/img/home/hamberger.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header_wrap">
            <Link to='/mypage'><img src={Profile} alt="" /></Link>
            <div>
                <Link to='/search'><img src={Bell} alt="" /></Link>
                <Link to='/cart'><img src={Show} alt="" /></Link>
                <Link to='/'><img src={Ham} alt="" /></Link>
            </div>
        </div>
    )
}

export default Header