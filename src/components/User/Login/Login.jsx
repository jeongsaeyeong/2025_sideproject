import React from 'react'
import Logo_Small from '../../../assets/img/login/logo_small.svg'
import Google from '../../../assets/img/login/google.svg'
import Apple from '../../../assets/img/login/apple.svg'
import Check from '../../../assets/img/login/check.svg'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='Login_wrap container'>
            <div className="header">
                <img className='logo' src={Logo_Small} alt="" />
            </div>
            <div className="main">
                <h1 className='title'>로그인</h1>
                <div className="login">
                    <div className="email">
                        <label>이메일 주소</label>
                        <input type="email" placeholder='이메일을 입력하세요.' />
                        <img src={Check} alt="" />
                    </div>
                    <div className="password">
                        <label>비밀번호</label>
                        <input type="password" placeholder='비밀번호를 입력하세요.' />
                    </div>
                    <Link to='/'>비밀번호 찾기</Link>
                </div>
                <button className="login_btn">로그인하기</button>
                <div className="decoration">
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
            </div>
            <div className="btn_box">
                <Link to='/'><img src={Google} alt="" /></Link>
                <Link to='/'><img src={Apple} alt="" /></Link>
            </div>
        </div>
    )
}

export default Login