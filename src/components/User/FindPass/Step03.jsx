import React from 'react'
import { Link } from 'react-router-dom'
import Logo_Small from '../../../assets/img/login/logo_small.svg';
import Rock from '../../../assets/img/login/rock.png';

const Step03 = () => {
    return (
        <div className='Step03_wrap container'>
            <div className="header">
                <img src={Logo_Small} alt="" />
            </div>
            <div className="main">
                <h1>비밀번호 재설정 완료</h1>
                <div>
                    <img src={Rock} alt="" />
                </div>
                <Link to='/login'>로그인 하러가기</Link>
            </div>
        </div>
    )
}

export default Step03