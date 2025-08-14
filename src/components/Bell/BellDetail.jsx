import React from 'react'
import Back from '../../assets/img/order/button_back.svg'
import Main_footer from '../QR/Main_footer'
import { useNavigate } from 'react-router-dom'

const BellDetail = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1)
    }

    return (
        <div className='BellDetail_wrap container Bell_wrap'>
            <div className="header">
                <button onClick={() => { onBack() }}><img src={Back} alt="" /></button>
                <h2>[공지] 2025 6월자 서비스 업데이트 안내</h2>
                <div></div>
            </div>
            <div className="main">
                <div className="content">
                    <p>
                        이번 업데이트는 전반적인 안정성 향상 및 일부 기능 개선을 포함 하고 있습니다. 세부 사항은 추후 공지될 예정이며, 사용자의 편의를 위한 다양한 테스트가 진행 중입니다. 감사합니다.
                    </p>
                </div>
            </div>
            <Main_footer />
        </div>
    )
}

export default BellDetail