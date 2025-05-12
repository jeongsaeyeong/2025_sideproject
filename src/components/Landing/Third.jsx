import React from 'react'
import Wallet from '../../assets/img/landing/wallet.png'

const Third = () => {
    return (
        <div className='Third_wrap Step_wrap'>
            <h1>
                <i>QR 스캔</i>으로<br />
                주문이 쉬워집니다
            </h1>
            <p>
                키오스크 대신,<br />
                자리에서 간편하게 주문하세요.
            </p>
            <img className='phone' src={Wallet} alt="" />
        </div>
    )
}

export default Third