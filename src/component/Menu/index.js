import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Logo from '../Logo'

const cx = classNames.bind(styles)

function Menu(){
    return (
        <div className={cx('overlay')}>
            <div className={cx('menu')}>
                <div className={cx('logo')}>
                    <Logo />
                </div>
                <ul className={cx('nav')}>
                    
                </ul>
            </div>
        </div>
    )
}

export default Menu