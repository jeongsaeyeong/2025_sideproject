import React from 'react'
import Header from '../Section/Header'
import Exam from '../../assets/img/main/img_exam.png'
import Exam02 from '../../assets/img/main/img_exam02.png'
import Book from '../../assets/img/main/button_book.svg'
import Right from '../../assets/img/main/button_rigth.svg'
import Main_footer from '../QR/Main_footer'
import { useNavigate } from 'react-router-dom'

const Main = () => {
    const navgaition = useNavigate();

    const onRecent = () => {
        navgaition('/recent')
    }

    const onDetail = () => {
        navgaition('/main_detail')
    }

    return (
        <div className='Home_wrap container'>
            <Header />
            <div className="main">
                <div className="recommend">
                    <h2>추천매장</h2>
                    <div className="list_wrap">
                        <div onClick={() => { onDetail() }} className="list">
                            <img src={Exam} alt="" />
                            <div className="text_wrap">
                                <div>
                                    <p>피에르가니에르서울</p>
                                    <button className="book"><img src={Book} alt="" /></button>
                                </div>
                                <p className="kind">프렌치</p>
                                <p className="now">현재 17명 보는 중</p>
                            </div>
                        </div>
                        <div onClick={() => { onDetail() }} className="list">
                            <img src={Exam} alt="" />
                            <div className="text_wrap">
                                <div>
                                    <p>피에르가니에르서울</p>
                                    <button className="book"><img src={Book} alt="" /></button>
                                </div>
                                <p className="kind">프렌치</p>
                                <p className="now">현재 17명 보는 중</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recent">
                    <div className="look">
                        <h2>최근 주문 내역</h2>
                        <button onClick={() => { onRecent() }}><img src={Right} alt="" /></button>
                    </div>
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
                        </div>
                    </div>
                </div>
            </div>
            <Main_footer />
        </div>
    )
}

export default Main