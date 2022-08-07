import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';

const cx = classNames.bind(styles)

function Login({ children }) {
    return (
        <Tippy
            render={attrs => (
                <div className={cx('log-in__box')} tabIndex="-1" {...attrs}>
                    <button className={cx('btn','login-btn')}>
                        Đăng nhập
                    </button>
                    <button className={cx('btn', 'logout-btn')}>
                        Đăng ký
                    </button>
                </div>
            )}
            interactive
            placement='bottom'
        >
            {children}
        </Tippy>
    )
}

export default Login