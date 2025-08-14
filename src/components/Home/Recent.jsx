import React from 'react'
import Header from '../Section/Header'
import Main_footer from '../QR/Main_footer'
import Exam02 from '../../assets/img/main/img_exam02.png'
import { useNavigate } from 'react-router-dom'

const Recent = () => {
    const naigation = useNavigate();

    const onReview = () => {
        naigation('/review')
    }

    return (
        <div className='Recent_wrap container'>
            <Header />
            <div className="main">
                <h1>최근 주문 내역</h1>
                <div className="list_wrap">
                    <div className="list">
                        <p className="date">3.26 (수) 매장 식사</p>
                        <div className="content">
                            <img src={Exam02} alt="" />
                            <div className="text_wrap">
                                <p className="name">마장동 한우곱창</p>
                                <p className="explane">한우곱창구이x4</p>
                                <p className="explane">곱창전골x3</p>
                                <p className="tax">총 결제금액 206,000원</p>
                            </div>
                        </div>
                        <button onClick={() => { onReview() }}>리뷰 쓰기</button>
                    </div>
                    <div className="list">
                        <p className="date">3.26 (수) 매장 식사</p>
                        <div className="content">
                            <img src={Exam02} alt="" />
                            <div className="text_wrap">
                                <p className="name">마장동 한우곱창</p>
                                <p className="explane">한우곱창구이x4</p>
                                <p className="explane">곱창전골x3</p>
                                <p className="tax">총 결제금액 206,000원</p>
                            </div>
                        </div>
                        <button onClick={() => { onReview() }}>리뷰 쓰기</button>
                    </div>
                    <div className="list">
                        <p className="date">3.26 (수) 매장 식사</p>
                        <div className="content">
                            <img src={Exam02} alt="" />
                            <div className="text_wrap">
                                <p className="name">마장동 한우곱창</p>
                                <p className="explane">한우곱창구이x4</p>
                                <p className="explane">곱창전골x3</p>
                                <p className="tax">총 결제금액 206,000원</p>
                            </div>
                        </div>
                        <button onClick={() => { onReview() }}>리뷰 쓰기</button>
                    </div>
                </div>
            </div>

            <Main_footer />
        </div>
    )
}

export default Recent