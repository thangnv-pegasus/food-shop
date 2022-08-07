import styles from './Banner.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useRef } from 'react'

const cx = classNames.bind(styles)

function BannerItem({ title, content, img_src, bg_color }) {
    const url = `url(${img_src})`

    const refBannerItem = useRef(null)
    const refOverlay = useRef(null)
    
    useEffect(() => {
        let itemElement = refBannerItem.current
        let overlayElement = refOverlay.current
 
        const handleBg = () => {
            overlayElement.style.filter = 'none'
            overlayElement.style.opacity = '1'
        }

        const UnhandleBg = () => {
            overlayElement.style.filter = 'alpha(opacity=100)'
            overlayElement.style.opacity = '0'
        }

        itemElement.addEventListener('mousemove', handleBg);
        itemElement.addEventListener('mouseleave', UnhandleBg);

        return () => {
            itemElement.removeEventListener('mousemove', handleBg)
            itemElement.removeEventListener('mouseleave', UnhandleBg)
        }
    },[])
    


    return (
        <div className={cx('banner-item')} style={{
            backgroundImage: url,
            backgroundColor: bg_color
        }}
        ref = {refBannerItem}
        >
            <div className={cx('banner-content')}>
                <a href="#" className={cx('banner-title')}>
                    {title}
                </a>
                <div className={cx('banner-slogan')}>
                    {content}
                </div>
                <a href="#" className={cx('btn')}>
                    Xem ngay
                </a>
            </div>
            <div className={cx('overlay')}
                ref = {refOverlay}
            >

            </div>
        </div>
    )
}

export default BannerItem