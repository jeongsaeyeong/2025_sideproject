import React from 'react'
import Back from '../../assets/img/main/button_back.svg'
import Sear from '../../assets/img/main/button_search.svg'
import Book from '../../assets/img/main/button_book_big.svg'
import Bin from '../../assets/img/main/button_book_bin.svg'
import Star from '../../assets/img/main/img_star.svg'
import Exam01 from '../../assets/img/main/img_list01.png'
import Exam02 from '../../assets/img/main/img_list02.png'
import Exam03 from '../../assets/img/main/img_list03.png'
import Exam04 from '../../assets/img/main/img_list04.png'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const navigation = useNavigate();

    const onDetail = () => {
        navigation('/main_detail')
    }

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Search_wrap container'>
            <div className="header">
                <button onClick={() => { onBack() }} className="back"><img src={Back} alt="" /></button>
                <div>
                    <input type="text" placeholder='검색어를 입력하세요!' />
                    <button><img src={Sear} alt="" /></button>
                </div>
            </div>
            <div className="main">
                <div className="list_wrap">
                    <div onClick={() => { onDetail() }} className="list">
                        <div className="text_wrap">
                            <div className="info">
                                <h2>피에르 가니에르</h2>
                                <p className="kind">프렌치</p>
                                <div className="star">
                                    <img src={Star} alt="" />
                                    <p>5.0</p>
                                    <p className='count'>(18)</p>
                                </div>
                                <p className="explane">프랑스 3스타 셰프가 운영하는 미쉐린 스타 레스토랑</p>
                            </div>
                            <button><img src={Book} alt="" /></button>
                        </div>
                        <div className="img_wrap">
                            <img className='left' src={Exam01} alt="" />
                            <img src={Exam02} alt="" />
                            <img src={Exam03} alt="" />
                            <img className='right' src={Exam04} alt="" />
                        </div>
                    </div>
                    <div onClick={() => { onDetail() }} className="list">
                        <div className="text_wrap">
                            <div className="info">
                                <h2>피에르 가니에르</h2>
                                <p className="kind">프렌치</p>
                                <div className="star">
                                    <img src={Star} alt="" />
                                    <p>5.0</p>
                                    <p className='count'>(18)</p>
                                </div>
                                <p className="explane">프랑스 3스타 셰프가 운영하는 미쉐린 스타 레스토랑</p>
                            </div>
                            <button><img src={Bin} alt="" /></button>
                        </div>
                        <div className="img_wrap">
                            <img className='left' src={Exam01} alt="" />
                            <img src={Exam02} alt="" />
                            <img src={Exam03} alt="" />
                            <img className='right' src={Exam04} alt="" />
                        </div>
                    </div>
                    <div onClick={() => { onDetail() }} className="list">
                        <div className="text_wrap">
                            <div className="info">
                                <h2>피에르 가니에르</h2>
                                <p className="kind">프렌치</p>
                                <div className="star">
                                    <img src={Star} alt="" />
                                    <p>5.0</p>
                                    <p className='count'>(18)</p>
                                </div>
                                <p className="explane">프랑스 3스타 셰프가 운영하는 미쉐린 스타 레스토랑</p>
                            </div>
                            <button><img src={Bin} alt="" /></button>
                        </div>
                        <div className="img_wrap">
                            <img className='left' src={Exam01} alt="" />
                            <img src={Exam02} alt="" />
                            <img src={Exam03} alt="" />
                            <img className='right' src={Exam04} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search