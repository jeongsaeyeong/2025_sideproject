import React, { useEffect, useState, useRef } from 'react';
import Back from '../../../assets/img/login/back_btn.svg';
import Logo_Small from '../../../assets/img/login/logo_small.svg';
import { useNavigate } from 'react-router-dom';

const Step01 = () => {
    const navigation = useNavigate();

    const [seconds, setSeconds] = useState(60);
    const timerRef = useRef(null);

    const onBack = () => {
        navigation(-1);
    };

    const onCheck = () => {
        navigation('/pass_reset');
    }

    const startTimer = () => {
        if (timerRef.current) clearInterval(timerRef.current);

        setSeconds(60);

        timerRef.current = setInterval(() => {
            setSeconds(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    const formatTime = () => {
        const min = String(Math.floor(seconds / 60)).padStart(1, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${min}:${sec}`;
    };

    return (
        <div className='Step01_wrap container Login_wrap'>
            <div className="header">
                <button className='back' onClick={onBack}>
                    <img src={Back} alt="뒤로가기" />
                </button>
                <img className='logo' src={Logo_Small} alt="로고" />
            </div>
            <div className="main">
                <h1>이메일을 확인하세요</h1>
                <div className="check_input">
                    <input pattern="\d" required type="text" placeholder='1' />
                    <input pattern="\d" required type="text" placeholder='1' />
                    <input pattern="\d" required type="text" placeholder='1' />
                    <input pattern="\d" required type="text" placeholder='1' />
                </div>
                <button className="login_btn" onClick={() => { onCheck() }}>인증하기</button>
                <div className="reset">
                    <button onClick={startTimer}>코드 다시 전송하기</button>
                    <p className="time">{formatTime()}</p>
                </div>
            </div>
        </div>
    );
};

export default Step01;
