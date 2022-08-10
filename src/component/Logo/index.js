import styles from './Logo.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { routes } from '../../config/routes'

const cx = classNames.bind(styles)

function Logo({src, alt}){
    return (
        <Link to={routes.home} className={cx('logo')}>
            <img src={src} alt={alt} />
        </Link>
    )
}

export default Logo