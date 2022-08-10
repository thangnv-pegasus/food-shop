import styles from './Banner.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Banner() {
    return (
        <Link to="/" className={cx('banner')}>
            <img src="https://bizweb.dktcdn.net/100/350/980/themes/802125/assets/slider_1.jpg?1658680172137" alt="banner" />
        </Link>
    )
}

export default Banner