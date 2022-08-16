import Header from "./Header"
import Footer from './Footer'
import className from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = className.bind(styles)

function DefaultLayout({ children, cart, removeCart, setMenuModal, login, setLogin, userLogin, setUserLogin }) {

    return (
        <div>
            <Header
                cart={cart}
                removeCart={removeCart}
                setMenuModal={setMenuModal}
                login={login}
                setLogin={setLogin}
                userLogin={userLogin}
                setUserLogin={setUserLogin}
            />

            <div className={cx('content')}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default DefaultLayout