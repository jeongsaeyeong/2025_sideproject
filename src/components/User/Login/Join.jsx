import React from 'react'
import Back from '../../../assets/img/login/back_btn.svg'
import Logo_Small from '../../../assets/img/login/logo_small.svg'
import Logo_Title from '../../../assets/img/login/logo_title.svg'
import Pass_off from '../../../assets/img/login/password_off.svg'
import { useNavigate } from 'react-router-dom'

const Join = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1);
    }

    return (
        <div className='Join_wrap container Login_Choose_wrap'>
            <button className='back' onClick={()=>{onBack()}}>
                <img src={Back} alt="" />
            </button>
            <div className="top">
                <img className='logo_Small' src={Logo_Small} alt="" />
                <img className='logo_Title' src={Logo_Title} alt="" />
                <p>클릭 한번으로 쉬운 주문</p>
            </div>
            <div className="main">
                <input type="text" placeholder='이름' />
                <input type="text" placeholder='이메일 주소' />
                <input type="text" placeholder='비밀번호' />
                <div>
                    <input type="text" placeholder='비밀번호 관리' />
                    <img src={Pass_off} alt="" />
                </div>
                <button>계속하기</button>
            </div>
        </div>
    )
}

export default Join