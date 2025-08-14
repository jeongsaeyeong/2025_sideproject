import React from 'react'
import Exam from '../../assets/img/main/img_exam.png'
import Exam02 from '../../assets/img/main/img_list02.png'
import Star from '../../assets/img/main/button_star_bin.svg'
import Picture from '../../assets/img/main/button_picture.svg'

const Review_W = () => {
    return (
        <div className='Review_W_wrap container'>
            <div className="top">
                <img src={Exam} alt="" />
                <p>피에르 가니에르</p>
                <div className="star_wrap">
                    <button><img src={Star} alt="" /></button>
                    <button><img src={Star} alt="" /></button>
                    <button><img src={Star} alt="" /></button>
                    <button><img src={Star} alt="" /></button>
                    <button><img src={Star} alt="" /></button>
                </div>
                <textarea name="" id="" placeholder='음식의 맛, 서비스, 대기 시간을 포함하여 솔직한 리뷰를 작성해주세요.'></textarea>
                <div className="file_wrap">
                    <input type="file" name="" id="file" />
                    <label htmlFor="file">
                        <img src={Picture} alt="" />
                        <p>사진 1/5</p>
                    </label>
                    <img src={Exam02} alt="" />
                </div>
            </div>
            <div className="bottom">
                <h2>어떤 점이 마음에 드셨나요?</h2>
                <div className="tage_wrap">
                    <p>💎  매장이 깨끗해요</p>
                    <p>🛋️  인테리어가 멋있어요</p>
                    <p>⏱️  회전율이 빨라요</p>
                    <p className='click'>🍽️  플레이팅이 예뻐요</p>
                    <p>🧼  청결해요</p>
                    <p>🌹  분위기가 좋아요</p>
                    <p>☺️  서비스가 친절해요</p>
                    <p className='click'>💵  가격이 합리적이에요</p>
                    <p>🚗  주차가 편리해요</p>
                </div>
                <div className="btn_wrap">
                    <p>* 작성된 리뷰는 수정될 수 없습니다. </p>
                    <button>작성 완료</button>
                </div>
            </div>
        </div>
    )
}

export default Review_W