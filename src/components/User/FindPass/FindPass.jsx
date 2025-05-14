import React from 'react'
import Back from '../../../assets/img/login/back_btn.svg'
import Logo_Small from '../../../assets/img/login/logo_small.svg'
import Check from '../../../assets/img/login/check.svg'
import { Link, useNavigate } from 'react-router-dom'

const FindPass = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1);
    }

    const Next = () => {
        navigation('/findpass_check')
    }

    return (
        <div className='FindPass_wrap container Login_wrap'>
            <div className="header">
                <button className='back' onClick={() => { onBack() }}>
                    <img src={Back} alt="" />
                </button>
                <img className='logo' src={Logo_Small} alt="" />
            </div>
            <div className="main">
                <h1 className='title'>비밀번호 재설정</h1>
                <div className="login">
                    <div className="email">
                        <label>이메일 주소</label>
                        <input type="email" placeholder='이메일을 입력하세요.' />
                        <img src={Check} alt="" />
                    </div>
                </div>
                <button className="login_btn" onClick={() => { Next() }}>코드 전송</button>
                <div className="go_login">
                    <p>비밀번호를 아시나요?</p>
                    <Link to='/login'>로그인하기</Link>
                </div>
            </div>
        </div>
    )
}

export default FindPass