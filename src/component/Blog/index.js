import styles from './Blog.module.scss'
import classNames from 'classnames/bind'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Blog({ blog }) {
    const img_src = `url(${blog.img_src})`
    const navigate = useNavigate()

    return (
        <div className={cx('blog-item')}>
            <div
                className={cx('blog-img')}
                onClick={() => {
                    window.scrollTo(0)
                    navigate(`/blog/${blog.id}`)
                }}
                style={{
                    backgroundImage: img_src
                }}
            >
            </div>
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
                <div className={cx('blog-title')} onClick={() => {
                    window.scrollTo(0,0)
                    navigate(`/blog/${blog.id}`)
                }}
                >
                    {blog.title}
                </div>
                <div className={cx('blog-content')}>
                    {blog.content}
                </div>
            </div>
        </div>
    )

}

export default Blog