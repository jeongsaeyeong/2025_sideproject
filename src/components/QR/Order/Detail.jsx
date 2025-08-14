import React from 'react'
import Exam from '../../../assets/img/order/img_detail.png'
import Down from '../../../assets/img/order/button_down.svg'
import Up from '../../../assets/img/order/button_up.svg'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
    const navigation = useNavigate();

    const onGo = () => {
        navigation('/order')
    }

    return (
        <div className='Detail_wrap container'>
            <img src={Exam} alt="" />
            <div className="text_wrap">
                <p className="name">함박스테이크</p>
                <div className="explane">
                    두툼한 고기 패티에<br />
                    진한 데미글라스 소스를 곁들인 정통 함박스테이크
                </div>
            </div>
            <div className="in_order">
                <div>
                    <p className="tax">총 12,900원</p>
                    <div className="count">
                        <button className="down"><img src={Down} alt="" /></button>
                        <p>1</p>
                        <button className="up"><img src={Up} alt="" /></button>
                    </div>
                </div>
                <button onClick={() => { onGo() }}>주문내역 담기</button>
            </div>
        </div>
    )
}

export default Detail