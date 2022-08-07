import styles from './aboutItem.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function AboutItem({ name, content, img_src }) {
    const img_url = `url(${img_src})`
    return (
        <div className={cx('about-item')}>
            <div className={cx('about-img')}
                style={{
                    backgroundImage: img_url
                }}
            >
            </div>
            <div className={cx('about-name')}>
                {name}
            </div>
            <div className={cx('about-content')}>
                {content}
            </div>
        </div>
    )
}

export default AboutItem