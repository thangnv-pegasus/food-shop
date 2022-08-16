import classNames from "classnames/bind";
import styles from './User.module.scss'
import Tippy from '@tippyjs/react/headless';
import { routes } from "../../config/routes";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)
function User({ children, setLogin, userLogin }) {
    return (
        <Tippy
            render={attrs => (
                <div className={cx('block')} tabIndex="-1" {...attrs}>
                    <Link to={`/member/${userLogin}`} className={cx('login')}
                    >
                        Tài khoản
                    </Link>
                    <Link to="/" className={cx('signup')} onClick={() => setLogin(false)}>
                        Đăng xuất
                    </Link>
                </div>
            )}
            placement='bottom'
            interactive
        >
            {children}
        </Tippy>
    )
}

export { User }