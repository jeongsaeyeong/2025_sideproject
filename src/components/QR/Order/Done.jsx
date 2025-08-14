import React from 'react'
import Back from '../../../assets/img/order/button_back.svg'
import Ok from '../../../assets/img/order/img_done.png'
import Exam from '../../../assets/img/order/img_example04.png'
import { useNavigate } from 'react-router-dom';

const Done = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Done_wrap container Cart_wrap'>
            <div className="header">
                <button onClick={() => { onBack() }} className='back'><img src={Back} alt="" /></button>
                <h2>주문완료</h2>
                <div></div>
            </div>
            <div className="main">
                <div className="done">
                    <h2>주문완료!</h2>
                    <p>주문한 음식을 곧 준비해드릴게요:)</p>
                    <img src={Ok} alt="" />
                    <p className="number">주문번호</p>
                    <h3>2088</h3>
                    <div>
                        <div className="text">
                            <p>주문완료</p>
                            <p className='now'>조리중</p>
                            <p>조리완료</p>
                        </div>
                        <div className="bar_wrap">
                            <div className="bar"></div>
                        </div>
                    </div>
                </div>
                <div className="menu_list">
                    <div className="list">
                        <div className="left">
                            <h3>VIN VIN</h3>
                            <p>찹스테이크x1</p>
                            <p>수프x2</p>
                            <p className="tax">29,000원</p>
                        </div>
                        <img src={Exam} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Done