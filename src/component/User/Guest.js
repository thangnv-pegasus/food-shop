import classNames from "classnames/bind";
import styles from './User.module.scss'
import Tippy from '@tippyjs/react/headless';
import { Link } from "react-router-dom";
import { routes } from "../../config/routes";

const cx = classNames.bind(styles)
function Guest({children}) {
    return (
        <Tippy
            render={attrs => (
                <div className={cx('block')} tabIndex="-1" {...attrs}>
                    <Link to={routes.login} className={cx('login')}>
                        Đăng nhập
                    </Link>
                    <Link to={routes.signup} className={cx('signup')}>
                        Đăng ký
                    </Link>
                </div>
            )}
            placement = 'bottom'
            interactive
        >
            {children}
        </Tippy>
    )
}

export {Guest}