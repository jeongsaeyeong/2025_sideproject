import React, { useEffect, useState, useRef } from 'react';
import Back from '../../../assets/img/login/back_btn.svg';
import Logo_Small from '../../../assets/img/login/logo_small.svg';
import { useNavigate } from 'react-router-dom';

const Buy = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1);
    };

    const onCheck = () => {
        navigation('/order_done');
    }

    return (
        <div className='Buy_wrap container Step01_wrap Login_wrap'>
            <div className="header">
                <button className='back' onClick={onBack}>
                    <img src={Back} alt="뒤로가기" />
                </button>
                <img className='logo' src={Logo_Small} alt="로고" />
            </div>
            <div className="main">
                <h1>결제 비밀번호를 입력하세요</h1>
                <div className="check_input">
                    <input pattern="\d" required type="text" placeholder='1' />
                    <input pattern="\d" required type="text" placeholder='1' />
                    <input pattern="\d" required type="text" placeholder='1' />
                    <input pattern="\d" required type="text" placeholder='1' />
                </div>
                <button className="login_btn" onClick={() => { onCheck() }}>인증하기</button>
            </div>
        </div>
    )
}

export default Buy