import React from 'react'
import Phone from '../../assets/img/landing/phone.png'

const Second = () => {
    return (
        <div className='Second_wrap Step_wrap'>
            <h1>
                <i>클릭 한 번</i>으로<br />
                쉽고 빠른 주문을 경험해보세요
            </h1>
            <p>
                복잡한 절차 없이, 간편한 결제로<br />
                스마트하게 매장을 이용해 보세요
            </p>
            <img className='phone' src={Phone} alt="" />
        </div>
    )
}

export default Second