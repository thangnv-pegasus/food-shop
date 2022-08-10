import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import TitlePage from '../../component/TitlePage'
import styles from './Intro.module.scss'
import data from '../../data/db.json'

const cx = classNames.bind(styles)

function Intro() {
    const [content, setContent] = useState('')

    useEffect(() => {
        setContent(data.intro)
    }, [])
    return (
        <>
            <TitlePage>
                Giới thiệu
            </TitlePage>
            <div className={cx('intro')}>
                <div className='grid wide'>
                    <div className={cx('title')}>
                        Giới thiệu
                    </div>
                    <div className={cx('intro__content')}>
                        {content.content1}
                    </div>
                    <div className={cx('intro__content')}>
                        {content.content2}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro