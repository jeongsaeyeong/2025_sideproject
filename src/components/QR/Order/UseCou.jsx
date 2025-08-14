import React, { useState } from 'react'
import Back from '../../../assets/img/mypage/button_back.svg'
import { useNavigate } from 'react-router-dom';

const UseCou = () => {
    const navigation = useNavigate();
    const [click, setClick] = useState([]);
    const [number, setNumber] = useState('');

    const onBack = () => {
        navigation(-1);
    };

    const couponData = [
        { id: 1, price: '3,000원', title: '첫주문 할인쿠폰', condition: '70,000원 이상 구매시 사용가능', date: '2025.06.01 까지' },
        { id: 2, price: '3,000원', title: '첫주문 할인쿠폰', condition: '70,000원 이상 구매시 사용가능', date: '2025.06.01 까지' },
    ];


    const onClick = (id) => {
        setClick(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    return (
        <div className='UseCou_wrap container Coupon_wrap Mypage_wrap'>
            <div className="header">
                <button onClick={onBack} className="back"><img src={Back} alt="back" /></button>
                <h1>쿠폰함</h1>
                <div></div>
            </div>

            <div className="main">
                <div className="have_count">
                    <p className='have'>보유<em>2</em></p>
                    <p className='count'>사용가능<em>2</em></p>
                </div>
                <div className="coupon_list">
                    {couponData.map(coupon => (
                        <div
                            key={coupon.id}
                            className={`coupon ${click.includes(coupon.id) ? 'click' : ''}`}
                            onClick={() => onClick(coupon.id)}
                        >
                            <p className='title'>{coupon.price}</p>
                            <h2>{coupon.title}</h2>
                            <p>{coupon.condition}</p>
                            <p className="date">{coupon.date}</p>
                        </div>
                    ))}
                </div>
                <button>쿠폰 사용하기(1)</button>
            </div>
        </div>
    )
}

export default UseCou