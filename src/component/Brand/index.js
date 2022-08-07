import styles from './Brand.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Brand({img_src}){
    const urlImg = `url(${img_src})`
    return (
        <div className={cx('brand-img')} style = {{
            backgroundImage: urlImg
        }}>
        </div>
    )
}

export default Brand