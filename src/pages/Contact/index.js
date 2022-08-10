import { faEnvelope, faLocationDot, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import TitlePage from '../../component/TitlePage'
import styles from './Contact.module.scss'

const cx = classNames.bind(styles)

function Contact() {
    return (
        <>
            <TitlePage>
                Liên hệ
            </TitlePage>
            <div className={cx('contact')}>
                <div className='grid wide'>
                    <div className='row'>
                        <div className='col c-4'>
                            <div className={cx('contact__infor')}>
                                <ul className={cx('address')}>
                                    <li>
                                        <span className={cx('icon', 'setting-icon')}>
                                            <FontAwesomeIcon icon={faLocationDot} />
                                        </span>
                                        <span className={cx('add__name')}>
                                            Toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Quận Ba Đình, Hà Nội
                                        </span>
                                    </li>
                                    <li>
                                        <span className={cx('icon')}>
                                            <FontAwesomeIcon icon={faMobile} />
                                        </span>
                                        <a href="tel:+19006750" className={cx('add__name')}>
                                            19006750
                                        </a>
                                    </li>
                                    <li>
                                        <span className={cx('icon')}>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </span>
                                        <a href="mailto:support@sapo.vn" className={cx('add__name')}>
                                            support@sapo.vn
                                        </a>
                                    </li>
                                </ul>
                                <div className={cx('mailto-page')}>
                                    <form>
                                        <div className={cx('title')}>
                                            Liên hệ với chúng tôi
                                        </div>
                                        <input
                                            className={cx('form', 'text-form')}
                                            type="text"
                                            placeholder='Họ và tên'
                                        />

                                        <input
                                            className={cx('form', 'mail-form')}
                                            type="email"
                                            placeholder="Email"
                                        />
                                        <textarea
                                            placeholder="Nội dung"
                                            name="contact[body]"
                                            className={cx('form', 'text-area-form')}
                                            required="">
                                        </textarea>
                                        <button className={cx('submit')}>
                                            Gửi liên hệ
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='col c-8'>
                            <div className={cx('contact__map')}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9042741015214!2d105.8158777!3d21.036515899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab128b45bf23%3A0xd1d32b58169417cd!2zMjY2IMSQ4buZaSBD4bqlbiwgTGnhu4V1IEdpYWksIEJhIMSQw6xuaCwgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1659564914292!5m2!1svi!2s"
                                    style = {{
                                        border:0,
                                    }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact