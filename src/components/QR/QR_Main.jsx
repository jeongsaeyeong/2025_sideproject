import React from 'react'
import Main_qr from './Main_qr'
import Main_card from './Main_card'
import Main_footer from './Main_footer'
import Header from '../Section/Header'

const QR_Main = () => {
    return (
        <>
            <Header />
            <div className='Main_wrap container'>
                <Main_qr />
                <Main_card />
            </div>
            <Main_footer />
        </>
    )
}

export default QR_Main