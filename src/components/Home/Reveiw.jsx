import React from 'react'
import Back from '../../assets/img/main/button_back.svg'
import Star from '../../assets/img/main/button_star_bin.svg'
import Exam from '../../assets/img/main/img_exam.png'
import { useNavigate } from 'react-router-dom'

const Reveiw = () => {
    const navgaition = useNavigate();

    const onWrite = () => {
        navgaition('/review_write')
    }

    return (
        <div className='Reveiw_wrap container'>
            <button><img src={Back} alt="" /></button>
            <div className="main">
                <div>
                    <img src={Exam} alt="" />
                    <h2>피에르 가니에르에서의<br />식사는 어떠셨나요?</h2>
                    <div className="start_wrap" onClick={() => { onWrite() }}>
                        <button><img src={Star} alt="" /></button>
                        <button><img src={Star} alt="" /></button>
                        <button><img src={Star} alt="" /></button>
                        <button><img src={Star} alt="" /></button>
                        <button><img src={Star} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reveiw