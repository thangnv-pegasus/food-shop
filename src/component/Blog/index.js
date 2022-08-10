import styles from './Blog.module.scss'
import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import { routes } from '../../config/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Blog({ blog }) {
    return (
        <div className={cx('blog-item')}>
            <NavLink to={`/blog/${blog.id}`} className={cx('blog-img')} onClick = {()=> window.scrollTo(0)}>
                <img src={blog.img_src} />
            </NavLink>
            <div className={cx('blog-time')}>
                <div className={cx('blog-date')}>
                    <span className={cx('icon')}><FontAwesomeIcon icon={faCalendarDay} /></span>
                    <span className={cx('primary-color')}>{blog.date}</span>
                </div>
                <div className={cx('blog-author')}>
                    <span className={cx('icon')}>Đăng bởi: </span>
                    <span className={cx('primary-color')} >{blog.author}</span>
                </div>
            </div>
            <div className={cx('blog-infor')}>
                <Link to={routes.blog} className={cx('blog-title')} onClick = {()=> window.scrollTo(0)}>
                    {blog.title}
                </Link>
                <div className={cx('blog-content')}>
                    {blog.content}
                </div>
            </div>
        </div>
    )

}

export default Blog