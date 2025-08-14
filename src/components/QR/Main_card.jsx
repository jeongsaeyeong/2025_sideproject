import React, { useState } from 'react'
import Detail from '../../assets/img/home/btn_right.svg'
import Card01 from '../../assets/img/home/card01.png'
import Card02 from '../../assets/img/home/card02.png'
import Card03 from '../../assets/img/home/card03.png'
import { Link } from 'react-router-dom'

const Main_card = () => {
    const [click, setClick] = useState(0);

    const cards = [
        {
            name: 'BC 카드',
            number: '1938 3840 **** ****',
            expire: '5/22',
            type: '체크',
            img: Card01,
        },
        {
            name: '신한 카드',
            number: '4812 9123 **** ****',
            expire: '12/25',
            type: '신용',
            img: Card02,
        },
        {
            name: 'KB 국민카드',
            number: '5243 1122 **** ****',
            expire: '3/24',
            type: '체크',
            img: Card03,
        }
    ];


    return (
        <div className='Main_order_wrap'>
            <div className='top'>
                <p>결제수단</p>
                <Link to='/card'><img src={Detail} alt="" /></Link>
            </div>
            <div className="bottom">
                <div className="card_list">
                    {cards.map((card, key) => (
                        <div className={`card ${click===key ? 'click' : ''}`} key={key} onClick={()=>{setClick(key)}}>
                            <div className="left">
                                <h4>{card.name}</h4>
                                <div>
                                    <p className="number">{card.number}</p>
                                    <p className="day">{card.day}</p>
                                    <p className="kind">{card.type}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={card.img} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Main_card