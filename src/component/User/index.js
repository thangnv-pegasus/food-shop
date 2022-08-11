import styles from './User.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
const cx = classNames.bind(styles)

function User({setLogin}){
    return (
        <Tippy
            render={attrs => (
                <div className={cx('log-in__box')} tabIndex="-1" {...attrs}>
                    <Link to={routes.login} className={cx('btn', 'login-btn')}>
                        Tài khoản
                    </Link>
                    <Link to={routes.signup} className={cx('btn', 'logout-btn')}
                        onClick = {()=>setLogin(false)} 
                    >
                        Đăng xuất
                    </Link>
                </div>
            )}
            interactive
            placement='bottom'
        >
            {children}
        </Tippy>
    )
}

export default User