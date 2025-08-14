import React from 'react'
import Back from '../../../assets/img/mypage/button_back.svg'
import Profile from '../../../assets/img/mypage/img_profile.svg'
import Scrap from '../../../assets/img/mypage/link_scrap.svg'
import Coupon from '../../../assets/img/mypage/link_cupon.svg'
import Nick from '../../../assets/img/mypage/link_nick.svg'
import Pass from '../../../assets/img/mypage/link_password.svg'
import Buy from '../../../assets/img/mypage/link_buypassword.svg'
import { useNavigate } from 'react-router-dom'

const Mypage = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1);
    }

    const onModify = () => {
        navigation('/profile_modify')
    }

    const onScrap = () => {
        navigation('/scrap')
    }

    const onLogin = () => {
        navigation('/login')
    }

    const onCoupon = () => {
        navigation('/coupon')
    }

    const onPass = () => {
        navigation('/pass_reset')
    }

    const onBuy = () => {
        navigation('/pass_reset')
    }

    return (
        <div className='Mypage_wrap container'>
            <div className="header">
                <button onClick={() => { onBack() }} className="back"><img src={Back} alt="" /></button>
                <h1>마이페이지</h1>
                <div></div>
            </div>
            <div className="main">
                <div className="info_wrap">
                    <div onClick={() => { onModify() }} className="profile"><img src={Profile} alt="" /></div>
                    <div className="info">
                        <p className='name'>홍길동</p>
                        <p className="email">honggill@gmail.com</p>
                    </div>
                </div>
                <div className="choose_wrap">
                    <div className='scrap'>
                        <h3>저장매장</h3>
                        <div onClick={() => { onScrap() }} >
                            <img src={Scrap} alt="" />
                            <p>나의 저장 매장</p>
                        </div>
                    </div>
                    <div onClick={() => { onCoupon() }} className='cupon'>
                        <h3>쿠폰</h3>
                        <div>
                            <img src={Coupon} alt="" />
                            <p>보유 쿠폰</p>
                        </div>
                    </div>
                    <div className='userinfo'>
                        <h3>계정정보</h3>
                        <div onClick={() => { onModify() }} >
                            <img src={Nick} alt="" />
                            <p>닉네임 변경</p>
                        </div>
                        <div onClick={() => { onPass() }} >
                            <img src={Pass} alt="" />
                            <p>비밀번호 변경</p>
                        </div >
                        <div onClick={() => { onBuy() }} className='buy'>
                            <img src={Buy} alt="" />
                            <p>결제 비밀번호 재설정</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => { onLogin() }}>로그아웃</button>
            </div>
        </div>
    )
}

export default Mypage