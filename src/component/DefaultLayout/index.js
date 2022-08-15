import Header from "./Header"
import Footer from './Footer'
import className from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = className.bind(styles)

function DefaultLayout({ children, cart, removeCart, setMenuModal }) {

    return (
        <div>
            <Header cart={cart} removeCart = {removeCart} setMenuModal={setMenuModal}/>

            <div className={cx('content')}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout