import styles from './Title.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const cx = classNames.bind(styles)

function Title({ children, img_src, isHover = false, to }) {
    const img_url = `url(${img_src})`

    {
        if (!isHover) {
            return (
                <div className={cx('title')}>
                    {children}
                    <div className={cx('small-img')}>

                    </div>
                </div>
            )
        } else {
            return (
                <NavLink className={cx('title', 'link')} to={to}>
                    {children}
                    <div className={cx('small-img')}>

                    </div>
                </NavLink>
            )
        }
    }
}

export default Title