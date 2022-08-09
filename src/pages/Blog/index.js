import styles from './Blog.module.scss'
import classNames from 'classnames/bind'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import data from '~/data/db.json'
import TitlePage from '~/component/TitlePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function BlogPage() {

    const { blogId } = useParams()

    const thisBlog = data.blogs.find(blog => blog.id == blogId)
    const blogs = data.blogs.filter(blog => blog.id !== blogId)

    return (
        <div className='blog'>
            <TitlePage>
                {thisBlog.title}
            </TitlePage>
            <div className='grid wide'>
                <div className={cx('blog-section')}>
                    <div className={cx('blog-title')}>
                        {thisBlog.title}
                    </div>
                    <div className={cx('blog-img')}>
                        <img src={thisBlog.img_src} />
                    </div>
                    <div className={cx('blog-time')}>
                        <div className={cx('blog-date')}>
                            <span>
                                <FontAwesomeIcon icon={faClock} />
                            </span>
                            {thisBlog.date}
                        </div>
                        <div className={cx('blog-author')}>
                            <span>
                                Đăng bởi:
                            </span>
                            {thisBlog.author}
                        </div>

                    </div>
                    <div className={cx('blog-content')}>
                        {
                            thisBlog.content.map((content,index) => {
                                return (
                                    <div key={index} className = {cx('content-item')}>
                                        {content}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <ul className={cx('blog-other')}>
                        <div className={cx('other-heading')}>
                            Tin tức khác:
                        </div>
                        {
                            blogs.map(blog => {
                                return (
                                    <li key={blog.id}>
                                        <Link to="/blog/:blogId">
                                            {blog.title}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogPage