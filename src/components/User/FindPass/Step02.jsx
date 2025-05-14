import React from 'react'
import Back from '../../../assets/img/login/back_btn.svg';
import Logo_Small from '../../../assets/img/login/logo_small.svg';
import { Link, useNavigate } from 'react-router-dom';
import Check from '../../../assets/img/login/check.svg'

const Step02 = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1);
    };

    const onReset = () => {
        navigation('/reset_done');
    };

    return (
        <div className='Step02_wrap container Login_wrap'>
            <div className="header">
                <button className='back' onClick={onBack}>
                    <img src={Back} alt="뒤로가기" />
                </button>
                <img className='logo' src={Logo_Small} alt="로고" />
            </div>
            <div className="main">
                <h1>비밀번호 재설정</h1>
                <div className="login">
                    <div className="email">
                        <label>새로운 비밀번호</label>
                        <input type="password" placeholder='8자 이상' />
                        <img src={Check} alt="" />
                    </div>
                    <div className="email">
                        <label>비밀번호 확인</label>
                        <input type="password" placeholder='비밀번호를 다시 입력하세요.' />
                    </div>
                </div>
                <button className="login_btn" onClick={() => { onReset() }}>비밀번호 재설정</button>
                <div className="go_login">
                    <p>비밀번호를 아시나요?</p>
                    <Link to='/login'>로그인하기</Link>
                </div>
            </div>
        </div>
    )
}

export default Step02