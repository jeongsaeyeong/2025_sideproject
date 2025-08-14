import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../../../assets/img/mypage/button_back.svg'
import Profile from '../../../assets/img/mypage/img_profile.svg'

const Modify_Profile = () => {
    const navigation = useNavigate();
    const [email, setEmail] = useState('hongil@gmail.com');

    const onBack = () => {
        navigation(-1);
    }

    return (
        <div className='Modify_Profile Mypage_wrap container'>
            <div className="header">
                <button onClick={() => { onBack() }} className="back"><img src={Back} alt="" /></button>
                <h1>마이페이지</h1>
                <div></div>
            </div>
            <div className="main">
                <div className="modify_info_wrap">
                    <button className="modify_profile"><img src={Profile} alt="" /></button>
                    <div className="modify_info">
                        <div className='info'>
                            <h4>닉네임</h4>
                            <div>홍길동</div>
                        </div>
                        <div className="info">
                            <h4>대표 이메일</h4>
                            <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder='이메일을 입력해주세요' />
                        </div>
                    </div>
                </div>
                <button>저장하기</button>
            </div>
        </div>
    )
}

export default Modify_Profile