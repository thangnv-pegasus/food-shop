import classNames from 'classnames/bind'
import Blog from '../../component/Blog'
import TitlePage from '../../component/TitlePage'
import styles from './News.module.scss'
import data from '../../data/db.json'

const cx = classNames.bind(styles)

function News() {

    const blogs = data.blogs

    return (
        <>
            <TitlePage>
                Tin tức
            </TitlePage>
            <div className={cx('news')}>
                <div className='grid wide'>
                    <div className={cx('title')}>
                        Tin tức
                    </div>
                    <div className={cx('news-section')}>
                        <div className='row'>
                            {
                                blogs.map((blog, index) => {
                                    return (
                                        <div className='col c-4' key={index}>
                                            <Blog
                                                blog={blog}
                                            />
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News