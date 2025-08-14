import React from 'react'
import Main_footer from '../QR/Main_footer'
import Back from '../../assets/img/order/button_back.svg'
import { useNavigate } from 'react-router-dom'

const Bell = () => {
    const navigation = useNavigate();

    const onDetail = () => {
        navigation('/bell_detail')
    }

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='Bell_wrap container'>
            <div className="header">
                <button onClick={() => { onBack() }}><img src={Back} alt="" /></button>
                <h2>알림센터</h2>
                <div></div>
            </div>
            <div className="main">
                <div className="list_wrap">
                    <p onClick={() => { onDetail() }} className="list">[공지] 2025 6월자 서비스 업데이트 안내</p>
                    <p onClick={() => { onDetail() }} className="list">[공지] 2025 6월자 서비스 업데이트 안내</p>
                </div>
            </div>
            <Main_footer />
        </div>
    )
}

export default Bell