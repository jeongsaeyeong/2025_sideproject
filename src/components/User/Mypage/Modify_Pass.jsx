import React from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../../../assets/img/mypage/button_back.svg'

const Modify_Pass = () => {
    const navigation = useNavigate();

    const onBack = () => {
        navigation(-1);
    }

    return (
        <div className='Modify_Pass_wrap container Mypage_wrap'>
            <div className="header">
                <button onClick={() => { onBack() }} className="back"><img src={Back} alt="" /></button>
                <h1>마이페이지</h1>
                <div></div>
            </div>
        </div>
    )
}

export default Modify_Pass