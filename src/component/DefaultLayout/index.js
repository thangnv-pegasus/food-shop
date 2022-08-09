import Header from "./Header"
import Footer from './Footer'
import className from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import { useState, useEffect } from "react"

const cx = className.bind(styles)

function DefaultLayout({ children, cart, removeCart }) {

    return (
        <div>
            <Header cart={cart} removeCart = {removeCart}/>

            <div className={cx('content')}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout