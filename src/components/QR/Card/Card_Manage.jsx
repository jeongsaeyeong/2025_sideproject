import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Back from '../../../assets/img/home/button_back.svg'
import Card01 from '../../../assets/img/home/card01_big.png'
import Manage from '../../../assets/img/home/btn_management.svg'
import Down from '../../../assets/img/home/button_down.svg'
import Del from '../../../assets/img/home/button_delete.svg'

const Card_Manage = () => {
    const navigation = useNavigate();
    const [show, setShow] = useState('none')

    const onBack = () => {
        navigation(-1);
    }

    return (
        <div className='Card_Manage_wrap container'>
            <div className="header">
                <button onClick={() => { onBack() }} className="back"><img src={Back} alt="" /></button>
                <h1>카드관리</h1>
            </div>
            <div className="main">
                <div className="card_list">
                    <div className="card">
                        <div>
                            <img src={Card01} alt="" />
                        </div>
                        <p className="number">카카오뱅크 (143*)</p>
                        <p className="name">카카오뱅크 블랙</p>
                    </div>
                </div>
                <button onClick={() => { setShow('pop') }} className='manage'>
                    <img src={Manage} alt="" />
                    <p>카드 관리</p>
                </button>
            </div>
            {show === 'pop' && (
                <div className="card_pop_wrap">
                    <div className="pop">
                        <button onClick={() => { setShow('none') }} className='down'><img src={Down} alt="" /></button>
                        <h3>카드관리</h3>
                        <p className="number">카카오뱅크 (123*)</p>
                        <p className="name">카카오뱅크 블랙 RF</p>
                        <button onClick={() => { setShow('del') }} className='delete'>
                            <img src={Del} alt="" />
                            <p>카드 삭제</p>
                        </button>
                    </div>
                </div>
            )}
            {show === 'del' && (
                <div className="card_pop_del">
                    <div className="pop_del">
                        <p>등록된 카드를 삭제하시겠어요?</p>
                        <div className="btn_wrap">
                            <button className="nope">취소</button>
                            <button onClick={() => { setShow('ondelete') }} className="delete">삭제하기</button>
                        </div>
                    </div>
                </div>
            )}
            {show === 'ondelete' && (
                <div className="card_pop_ondel">
                    <div className="pop_ondel">
                        <img src={Del} alt="" />
                        <p>등록된 카드를 삭제했어요!</p>
                        <button onClick={() => { setShow('none') }}>확인</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card_Manage