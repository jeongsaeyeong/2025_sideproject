import React from 'react'
import Down from '../../../assets/img/order/button_down.svg'
import Up from '../../../assets/img/order/button_up.svg'
import Back from '../../../assets/img/order/button_back.svg'
import Right from '../../../assets/img/order/button_right.svg'
import Exam from '../../../assets/img/order/img_example01.png'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigation = useNavigate();

    const onCoupon = () => {
        navigation('/use_coupon')
    }

    const onBuy = () => {
        navigation('/buy')
    }

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Cart_wrap container'>
            <div className="header">
                <button onClick={() => { onBack() }} className='back'><img src={Back} alt="" /></button>
                <h2>장바구니</h2>
                <div></div>
            </div>
            <div className="main">
                <div className="all">
                    <div>
                        <input type="checkbox" id='all' />
                        <label htmlFor="all"></label>
                        <p>전체선택</p>
                    </div>
                    <button>상품삭제</button>
                </div>
                <div className="list_wrap">
                    <div className="list">
                        <div className='check_wrap'>
                            <input type="checkbox" id="check" />
                            <label htmlFor="check"></label>
                            <p>찹스테이크</p>
                        </div>
                        <div className="content_wrap">
                            <div>
                                <img src={Exam} alt="" />
                                <div className="content">
                                    <p className="option">-고기추가</p>
                                    <p className="tax">12,000원</p>
                                </div>
                            </div>
                            <div className="count">
                                <button className="down"><img src={Down} alt="" /></button>
                                <p>1</p>
                                <button className="up"><img src={Up} alt="" /></button>
                            </div>
                        </div>
                        <button>메뉴 추가</button>
                    </div>
                    <div className="list">
                        <div className='check_wrap'>
                            <input type="checkbox" id="check" />
                            <label htmlFor="check"></label>
                            <p>찹스테이크</p>
                        </div>
                        <div className="content_wrap">
                            <div>
                                <img src={Exam} alt="" />
                                <div className="content">
                                    <p className="option">-고기추가</p>
                                    <p className="tax">12,000원</p>
                                </div>
                            </div>
                            <div className="count">
                                <button className="down"><img src={Down} alt="" /></button>
                                <p>1</p>
                                <button className="up"><img src={Up} alt="" /></button>
                            </div>
                        </div>
                        <button>메뉴 추가</button>
                    </div>
                </div>
                <div className="coupon">
                    <h2>쿠폰</h2>
                    <button onClick={() => { onCoupon() }}>사용가능 <em>1장</em> <img src={Right} alt="" /></button>
                </div>
                <div className="receipt">
                    <div className="rec_tax">
                        <h2>결제 금액</h2>
                        <p className='tax'>16,200</p>
                    </div>
                    <div className="content">
                        <h3>상품금액</h3>
                        <div>
                            <p>찹스테이크 x1</p>
                            <p>12,000원</p>
                        </div>
                        <div>
                            <p>수프 x2</p>
                            <p>12,000원</p>
                        </div>
                        <div>
                            <p>수수료</p>
                            <p>1,200원</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => { onBuy() }}>0원 구매하기</button>
            </div>
        </div>
    )
}

export default Cart