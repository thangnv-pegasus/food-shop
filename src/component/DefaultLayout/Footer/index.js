import styles from './Footer.module.scss'
import classNames from 'classnames/bind'
import Logo from '../../../component/Logo'
import Direct from '../../../component/Direct'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faLocationDot, faMobileButton, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { routes } from '../../../config/routes'

const cx = classNames.bind(styles)

const Directions = [
    {
        id: 1,
        name: 'Trang chủ',
        path: routes.home
    },
    {
        id: 2,
        name: 'Giới thiệu',
        path: routes.intro
    },
    {
        id: 3,
        name: 'Sản phẩm',
        path: routes.product
    },
    {
        id: 4,
        name: 'Tin tức',
        path: routes.news
    },
    {
        id: 5,
        name: 'Liên hệ',
        path: routes.contact
    }
]

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('subscribe-to-sale')}>
                <div className='grid wide'>
                    <div className='row no-gutters row-product'>
                        <div className='col c-12 m-6 l-6'>
                            <div className={cx('subscribe-to-sale__title')}>
                                Đăng kí nhận tin khuyến mãi
                            </div>
                        </div>
                        <div className='col c-12 m-6 l-6'>
                            <div className={cx('subscribe-to-sale__inputForm')}>
                                <input type="email"
                                    placeholder='Nhập email của bạn'
                                />
                                <button>Đăng ký</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-contact')}>
                <div className='grid wide'>
                    <div className='row no-gutters row-product'>
                        <div className='col c-12 l-4 m-12'>
                            <div className={cx('contact__logo')}>
                                <Logo
                                    src="https://bizweb.dktcdn.net/100/350/980/themes/802125/assets/logo.png?1658680172137"
                                    alt="logo"
                                />
                            </div>
                            <ul className={cx('contact__add')}>
                                <li>
                                    <div className={cx('contact__icon', 'map-icon')}>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                    </div>
                                    <div className={cx('contact__add--title')}>
                                        Toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Quận Ba Đình, Hà Nội
                                    </div>
                                </li>
                                <li>
                                    <div className={cx('contact__icon')}>
                                        <FontAwesomeIcon icon={faMobileScreenButton} />
                                    </div>

                                    <a href="tel:+1900 6750" className={cx('contact__add--title')}>
                                        1900 6750
                                    </a>
                                </li>
                                <li>
                                    <div className={cx('contact__icon')}>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <a href="mailto:support@sapo.vn" className={cx('contact__add--title')}>
                                        support@sapo.vn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='col c-12 m-12 l-8'>
                            <div className='row no-gutters'>
                                <div className='c-4 l-4 m-4'>
                                    <div className={cx('footer__service--title')}>
                                        Cẩm nang sử dụng
                                    </div>
                                    <ul className={cx('footer__service')}>
                                        {
                                            Directions.map((direct, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Direct
                                                            children={direct.name}
                                                            NavLink={NavLink}
                                                            path={direct.path}
                                                        />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className='c-4 l-4 m-4'>
                                    <div className={cx('footer__service--title')}>
                                        Chính sách
                                    </div>
                                    <ul className={cx('footer__service')}>
                                        {
                                            Directions.map((direct, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Direct
                                                            children={direct.name}
                                                            NavLink={NavLink}
                                                            path={direct.path}
                                                        />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className='c-4 l-4 m-4'>
                                    <div className={cx('footer__service--title')}>
                                        Dịch vụ
                                    </div>
                                    <ul className={cx('footer__service')}>
                                        {
                                            Directions.map((direct, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Direct
                                                            children={direct.name}
                                                            NavLink={NavLink}
                                                            path={direct.path}
                                                        />
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer__copyRight')}>
                @ Bản quyền thuộc về <a href="#">Cool Team</a> | Cung cấp bởi Sapo
            </div>
        </div>
    )
}

export default Footer