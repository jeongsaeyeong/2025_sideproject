import React from 'react'
import Qr from '../../assets/img/home/qr.png'
import Scan from '../../assets/img/home/button_scan.svg'
import { useNavigate } from 'react-router-dom'

const Main_qr = () => {
    const navigation = useNavigate();

    const onGo = () => {
        navigation('/order')
    }

    return (
        <>
            <button onClick={() => { onGo() }} className="scan">
                <img src={Scan} alt="" />
                <h2>스캔</h2>
            </button>
            <div className='Main_qr_wrap'>

                <div>
                    <p>큐알 결제</p>
                    <img src={Qr} alt="" />
                </div>
            </div>
        </>
    )
}

export default Main_qr