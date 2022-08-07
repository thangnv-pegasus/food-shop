import styles from './Blog.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { routes } from '~/config/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Blog({ img_src, date, author, title, content }) {
    return (
        <div className={cx('blog-item')}>
            <NavLink to={routes.blog} className={cx('blog-img')}>
                <img src={img_src} />
            </NavLink>
            <div className={cx('blog-time')}>
                <div className={cx('blog-date')}>
                    <span className={cx('icon')}><FontAwesomeIcon icon={faCalendarDay} /></span>
                    <span className={cx('primary-color')}>{date}</span>
                </div>
                <div className={cx('blog-author')}>
                    <span className={cx('icon')}>Đăng bởi: </span>
                    <span className={cx('primary-color')} >{author}</span>
                </div>
            </div>
            <div className={cx('blog-infor')}>
                <NavLink to={routes.blog} className={cx('blog-title')}>
                    {title}
                </NavLink>
                <div className={cx('blog-content')}>
                    {content}
                </div>
            </div>
        </div>
    )

}

export default Blog