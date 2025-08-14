import React from 'react'
import Logo from '../../../assets/img/login/logo.svg'
import Google from '../../../assets/img/login/google.svg'
import Apple from '../../../assets/img/login/apple.svg'
import Email from '../../../assets/img/login/email.svg'
import { Link } from 'react-router-dom'

const Login_Choose = () => {
    return (
        <div className='Login_Choose_wrap container'>
            <div className="top">
                <img src={Logo} alt="" />
                <p>클릭 한번으로 쉬운 주문</p>
            </div>
            <div className="bottom">
                <Link to='/'>
                    <img src={Google} alt="" />
                    <h2>구글로 시작하기</h2>
                </Link>
                <Link to='/'>
                    <img src={Apple} alt="" />
                    <h2>애플로 시작하기</h2>
                </Link>
                <Link to='/join'>
                    <img src={Email} alt="" />
                    <h2>이메일로 시작하기</h2>
                </Link>
                <div>
                    <p>이미 가입 하셨나요?</p>
                    <Link to='/login'>로그인하기</Link>
                </div>
            </div>
        </div>
    )
}

export default Login_Choose