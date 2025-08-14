import React, { useState } from 'react'
import Back from '../../../assets/img/home/back.svg'
import Detail from '../../../assets/img/home/btn_detail.svg'
import { useNavigate } from 'react-router-dom'

const Card_Puls = () => {
    const navigation = useNavigate()

    const [allChecked, setAllChecked] = useState(false)
    const [agreements, setAgreements] = useState({
        personal: false,
        company: false,
        cueet: false,
    })

    const handleAllChange = () => {
        const newValue = !allChecked
        setAllChecked(newValue)
        setAgreements({
            personal: newValue,
            company: newValue,
            cueet: newValue,
        })
    }

    const handleSingleChange = (key) => {
        const updated = {
            ...agreements,
            [key]: !agreements[key],
        }
        setAgreements(updated)
        setAllChecked(updated.personal && updated.company && updated.cueet)
    }

    const onSubmit = () => {
        navigation('/card_plus_done')
    }

    return (
        <div className='Card_Puls_wrap container'>
            <div className="header">
                <button><img src={Back} alt="" /></button>
                <h1>카드등록</h1>
            </div>
            <div className="main">
                <div className="card_input">
                    <div>
                        <label>카드번호</label>
                        <input type="text" />
                    </div>
                    <div className='box'>
                        <div>
                            <label>유효기간</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>CVC</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div>
                        <label>비밀번호 앞 2자리</label>
                        <input type="text" />
                    </div>
                </div>

                <div className="card_info">
                    <div className="all">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={allChecked}
                                onChange={handleAllChange}
                            />
                            <span className="checkmark"></span>
                            <p>전체 약관에 모두 동의합니다.</p>
                        </label>
                    </div>
                    <div className="alone">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={agreements.personal}
                                onChange={() => handleSingleChange('personal')}
                            />
                            <span className="checkmark"></span>
                            <p>개인정보 수집 및 이용 동의(필수)</p>
                            <button><img src={Detail} alt="" /></button>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={agreements.company}
                                onChange={() => handleSingleChange('company')}
                            />
                            <span className="checkmark"></span>
                            <p>카드사 개인정보 제공 동의(필수)</p>
                            <button><img src={Detail} alt="" /></button>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={agreements.cueet}
                                onChange={() => handleSingleChange('cueet')}
                            />
                            <span className="checkmark"></span>
                            <p>큐잇 개인정보 제공 동의(선택)</p>
                            <button><img src={Detail} alt="" /></button>
                        </label>
                    </div>
                </div>
                <button onClick={onSubmit}>카드 등록하기</button>
            </div>
        </div>
    )
}

export default Card_Puls
