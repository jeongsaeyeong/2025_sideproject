import React from 'react'
import Back from '../../assets/img/main/button_back_white.svg'
import Book from '../../assets/img/main/button_boook.svg'
import Star from '../../assets/img/main/img_star.svg'
import Place from '../../assets/img/main/icon_palce.svg'
import Two from '../../assets/img/main/icon_tow.svg'
import Time from '../../assets/img/main/icon_time.svg'
import Call from '../../assets/img/main/icon_call.svg'
import Insta from '../../assets/img/main/icon_instagram.svg'
import Home from '../../assets/img/main/icon_homepage.svg'
import Down from '../../assets/img/main/button_down.svg'
import Up from '../../assets/img/main/button_up.svg'
import Map from '../../assets/img/main/img_map.png'
import Photo01 from '../../assets/img/main/img_photo01.png'
import Photo02 from '../../assets/img/main/img_photo02.png'
import Photo03 from '../../assets/img/main/img_photo03.png'
import Photo04 from '../../assets/img/main/img_photo04.png'
import Photo05 from '../../assets/img/main/img_photo05.png'
import Photo06 from '../../assets/img/main/img_photo06.png'
import Exam from '../../assets/img/main/img_detail.png'
import Profile from '../../assets/img/main/img_profile.png'
import { useNavigate } from 'react-router-dom'

const Main_Detail = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Main_Detail_wrap container'>
            <div className="header">
                <img src={Exam} alt="" />
                <div className="btn_wrap">
                    <button onClick={() => { onBack() }} className="back"><img src={Back} alt="" /></button>
                    <button className="book"><img src={Book} alt="" /></button>
                </div>
            </div>
            <div className="main">
                <div className="info_wrap">
                    <h2>피에르 가니에르</h2>
                    <p className="kind">프렌치</p>
                    <div className='star'>
                        <img src={Star} alt="" />
                        <p className="score">5.0</p>
                        <p className="count">(18)</p>
                    </div>
                    <p className="explane">프랑스 3스타 셰프가 운영하는 미쉐린 스타 프렌치 레스토랑</p>
                    <div className="place_wrap">
                        <div>
                            <img src={Place} alt="" />
                            <p>서울 중구 소공로 106</p>
                            <img className='down' src={Down} alt="" />
                        </div>
                        <div className="detail">
                            <img src={Two} alt="" />
                            <p>을지로입구역 8번 출구에서 68m</p>
                        </div>
                    </div>
                    <div className="time_wrap">
                        <img src={Time} alt="" />
                        <p>12:00 - 22:00 · 매주 월요일 휴무</p>
                    </div>
                    <div className="call_wrap">
                        <img src={Call} alt="" />
                        <p>02-317-7181</p>
                    </div>
                </div>
                <div className="tab">
                    <button className='click'>홈</button>
                    <button>메뉴</button>
                    <button>리뷰</button>
                    <button>사진</button>
                </div>
                <div className="detail_wrap">
                    <div className="introduce">
                        <div>
                            <h3>매장 소개</h3>
                            <p>
                                롯데호텔 서울 Executive Tower 35층에 위치한 '피에르 가니에르 서울’은 성공적인 비즈니스를 위한 One Hour 서비스와 Contemporary French의 공간입니다. 차별화된 감각의 인테리어와 북한산과 서울 시내가 한눈에 들어오는 환상적인 전망을 경험해 보시기 바랍니다.
                            </p>
                        </div>
                        <div className='sns'>
                            <h3>SNS</h3>
                            <div>
                                <img src={Insta} alt="" />
                                <p>@pierregagnaire_seoul</p>
                            </div>
                            <div>
                                <img src={Home} alt="" />
                                <p>https://www.lottehotel.com/seoul-hotel/ko/dining/restaurant-pierre-gagnaire-a-seoul</p>
                            </div>
                        </div>
                    </div>
                    <div className="business">
                        <button>
                            <p>영업 정보</p>
                            <img src={Down} alt="" />
                        </button>
                    </div>
                    <div className="business">
                        <button>
                            <p>주차 정보</p>
                            <img src={Up} alt="" />
                        </button>
                        <div className="data">
                            <p>
                                월~금요일까지 휴무입니다.<br /><br />

                                1. 신사 스퀘어 건물 지하 3~5층까지 무료이용가능합니다.<br />
                                2. 예약 후 10분 이내 연락 없을 시 노쇼처리됩니다.
                            </p>
                        </div>
                    </div>
                    <div className="business">
                        <button>
                            <p>콜키지 정보</p>
                            <img src={Down} alt="" />
                        </button>
                    </div>
                    <div className="place_wrap">
                        <div>
                            <h3>위치</h3>
                            <img src={Map} alt="" />
                            <div>
                                <img src={Place} alt="" />
                                <p>서울 중구 소공로 106</p>
                            </div>
                            <div className="detail">
                                <img src={Two} alt="" />
                                <p>을지로입구역 8번 출구에서 68m</p>
                            </div>
                        </div>
                        <div>
                            <h3>찾아오시는 길</h3>
                            <p className='gray'>
                                을지로입구역 8번 출구에서 쭉 직진하신 후 롯데호텔 신관 35층에 위치해있습니다.
                            </p>
                        </div>
                    </div>
                    <div className="menu_wrap">
                        <h3>메뉴</h3>
                        <div className="menu">
                            <div>
                                <img src={Photo01} alt="" />
                                <div>
                                    <p>프렌치 풀코스</p>
                                    <p className="tage">인기메뉴</p>
                                </div>
                                <p className="info">정통 프렌치 풀코스요리</p>
                                <p className="price">210,000원</p>
                            </div>
                            <div>
                                <img src={Photo01} alt="" />
                                <div>
                                    <p>프렌치 풀코스</p>
                                    <p className="tage">인기메뉴</p>
                                </div>
                                <p className="info">정통 프렌치 풀코스요리</p>
                                <p className="price">210,000원</p>
                            </div>
                            <div>
                                <img src={Photo01} alt="" />
                                <div>
                                    <p>프렌치 풀코스</p>
                                    <p className="tage">인기메뉴</p>
                                </div>
                                <p className="info">정통 프렌치 풀코스요리</p>
                                <p className="price">210,000원</p>
                            </div>
                        </div>
                        <div className="review">
                            <h3>리뷰</h3>
                            <div className="star">
                                <h2>4.6</h2>
                                <div>
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                    <img src={Star} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment_wrap business">
                        <div className="comment">
                            <div className="top">
                                <img src={Profile} alt="" />
                                <div className="info">
                                    <h3>익명의 미식가</h3>
                                    <div className="star_wrap">
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                        <img src={Star} alt="" />
                                    </div>
                                    <p className="time">2023.04.29 방문</p>
                                </div>
                            </div>
                            <div className="bottom">
                                <p className="content">맛있어요~^^</p>
                                <div className="tage_wrap">
                                    <p>💎  매장이 깨끗해요</p>
                                    <p>💵  가격이 비싸요</p>
                                </div>
                            </div>
                        </div>
                        <button>
                            <p>리뷰 더보기</p>
                            <img src={Down} alt="" />
                        </button>
                    </div>
                    <div className="photo_wrap">
                        <h3>사진</h3>
                        <div>

                            <div className="left">
                                <img className='top' src={Photo01} alt="" />
                                <img className='middle' src={Photo02} alt="" />
                                <img className='bottom' src={Photo03} alt="" />
                            </div>
                            <div className="right">
                                <img src={Photo04} alt="" className="top" />
                                <img src={Photo05} alt="" className="middle" />
                                <img src={Photo06} alt="" className="bottom" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main_Detail