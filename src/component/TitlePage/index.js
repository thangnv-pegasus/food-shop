import classNames from "classnames/bind";
import styles from './TitlePage.module.scss'

const cx = classNames.bind(styles)

function TitlePage({children}){
    const url = 'url(https://bizweb.dktcdn.net/100/350/980/themes/802125/assets/bg_breadcrumb.png?1608187967113)'
    return (
        <div className={cx('title-page')} style={{
            backgroundImage: url
        }}>
            {children}
        </div>
    )
}

export default TitlePage