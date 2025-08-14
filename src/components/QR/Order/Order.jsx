import React from 'react'
import Exam01 from '../../../assets/img/order/img_example01.png'
import Exam02 from '../../../assets/img/order/img_example02.png'
import Exam03 from '../../../assets/img/order/img_example03.png'
import Book from '../../../assets/img/order/button_book.svg'
import { useNavigate } from 'react-router-dom'

const menuItems = [
    {
        title: '에피타이저',
        items: [
            {
                name: '프렌치 풀코스',
                tage: '인기메뉴',
                explane: '정통 프렌치 풀코스요리',
                price: '210,000원',
                img: Exam01,
            },
            {
                name: '프렌치 풀코스',
                tage: '인기메뉴',
                explane: '요라애 어울리는 와인과 함께하는 프렌치 페어링',
                price: '210,000원',
                img: Exam02,
            },
            {
                name: '프렌치 풀코스',
                tage: '인기메뉴',
                explane: '정통 프렌치 풀코스요리',
                price: '210,000원',
                img: Exam03,
            },
        ]
    },
    {
        title: '메인 메뉴',
        items: [
            {
                name: '프렌치 풀코스',
                tage: '인기메뉴',
                explane: '정통 프렌치 풀코스요리',
                price: '210,000원',
                img: Exam01,
            },
            {
                name: '프렌치 풀코스',
                tage: '인기메뉴',
                explane: '요라애 어울리는 와인과 함께하는 프렌치 페어링',
                price: '210,000원',
                img: Exam02,
            },
            {
                name: '프렌치 풀코스',
                tage: '인기메뉴',
                explane: '정통 프렌치 풀코스요리',
                price: '210,000원',
                img: Exam03,
            },
        ]
    },
    {
        title: '디저트 메뉴',
        items: [
            {
                name: '프렌치 풀코스',
                tage: '인기메뉴',
                explane: '정통 프렌치 풀코스요리',
                price: '210,000원',
                img: Exam01,
            },
            {
                name: '프렌치 풀코스',
                tage: '인기메뉴',
                explane: '요라애 어울리는 와인과 함께하는 프렌치 페어링',
                price: '210,000원',
                img: Exam02,
            },
            {
                name: '프렌치 풀코스',
                tage: '인기메뉴',
                explane: '정통 프렌치 풀코스요리',
                price: '210,000원',
                img: Exam03,
            },
        ]
    }
]

const Order = () => {
    const navigation = useNavigate();

    const onDetail = () => {
        navigation('/order_detail/01')
    }

    const onBuy = () => {
        navigation('/cart')
    }

    return (
        <div className='Order_wrap container'>
            <h2>테이블 오더</h2>
            <div className="main">
                <div className="list_wrap">
                    {menuItems.map((menu, idx) => (
                        <div className="list" key={idx}>
                            <h3>{menu.title}</h3>
                            <div className="content_wrap">
                                {menu.items.map((item, i) => (
                                    <div onClick={() => { onDetail() }} className="content" key={i}>
                                        <img src={item.img} alt="" />
                                        <div className="text_wrap">
                                            <div>
                                                <p className="name">{item.name}</p>
                                                <p className="tage">{item.tage}</p>
                                            </div>
                                            <p className="explane">{item.explane}</p>
                                            <p className="expensive">{item.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div onClick={() => { onBuy() }} className="in_order">
                <div className="bookmark"><img src={Book} alt="" /></div>
                <button>장바구니 보기(2)</button>
            </div>
        </div>
    )
}

export default Order
