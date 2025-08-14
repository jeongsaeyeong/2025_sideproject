import React from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../../../assets/img/mypage/button_back.svg'
import Btn_Scrap from '../../../assets/img/mypage/button_scrap.svg'
import Place from '../../../assets/img/mypage/img_place.png'

const Scrap = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1);
    }

    return (
        <div className='Scrap_wrap Mypage_wrap container'>
            <div className="header">
                <button onClick={() => { onBack() }} className="back"><img src={Back} alt="" /></button>
                <h1>마이페이지</h1>
                <div></div>
            </div>
            <div className="main">
                <div className="scrap_list">
                    <div className="scrap">
                        <div>
                            <img src={Place} alt="" />
                            <div className="scrap_info">
                                <h3>몽탄</h3>
                                <p>양식 · 퓨전</p>
                                <p className="place">이태원 용산구</p>
                            </div>
                        </div>
                        <button><img src={Btn_Scrap} alt="" /></button>
                    </div>
                    <div className="scrap center">
                        <div>
                            <img src={Place} alt="" />
                            <div className="scrap_info">
                                <h3>몽탄</h3>
                                <p>양식 · 퓨전</p>
                                <p className="place">이태원 용산구</p>
                            </div>
                        </div>
                        <button><img src={Btn_Scrap} alt="" /></button>
                    </div>
                    <div className="scrap">
                        <div>
                            <img src={Place} alt="" />
                            <div className="scrap_info">
                                <h3>몽탄</h3>
                                <p>양식 · 퓨전</p>
                                <p className="place">이태원 용산구</p>
                            </div>
                        </div>
                        <button><img src={Btn_Scrap} alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scrap