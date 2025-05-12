import React from 'react'
import Puzzle from '../../assets/img/landing/puzzle.png'

const Forth = () => {
    return (
        <div className='Forth_wrap Step_wrap'>
            <h1>
                <i>스마트</i>한 주문을<br />
                경헙해보세요
            </h1>
            <p>
                키오스크 대신,<br />
                자리에서 간편하게 주문하세요.
            </p>
            <img className='phone' src={Puzzle} alt="" />
        </div>
    )
}

export default Forth