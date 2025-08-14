import React from 'react'
import Cardimg from '../../../assets/img/home/plus_done.png'
import { Link } from 'react-router-dom'

const Card_Plus_Done = () => {
    return (
        <div className='Card_Plus_Done_wrap container'>
            <div className='top'>
                <img src={Cardimg} alt="" />
                <h1>카드 등록 완료</h1>
            </div>
            <Link to='/card'>돌아가기</Link>
        </div>
    )
}

export default Card_Plus_Done