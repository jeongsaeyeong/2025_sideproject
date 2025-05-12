import React, { useEffect } from 'react'
import Logo_title from '../../assets/img/landing/logo_title.svg'
import Logo_big from '../../assets/img/landing/logo_big.png'

const First = ({ setStep }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            setStep(2);
        }, 2000);

        return () => clearTimeout(timer);
    }, [setStep]);

    return (
        <div className='First_wrap'>
            <img className='logo_title' src={Logo_title} alt="" />
            <h1>주문을 새롭게</h1>
            <img className='logo_big' src={Logo_big} alt="" />
        </div>
    )
}

export default First;
