import styles from './Login.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../component/TitlePage'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGooglePlusG, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { useContext, useState } from 'react';
import { account } from '../../App';
import { Link } from 'react-router-dom'
import { routes } from '../../config/routes';

const cx = classNames.bind(styles)

function Login({ setLogin }) {

    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')

    const account1 = useContext(account)

    const checkAccount = () => {
        if (mail == account1.email && pass == account1.password) {
            setLogin(true)
        }
    }

    return (
        <div className={cx('login')}>
            <TitlePage>
                Đăng nhập tài khoản
            </TitlePage>
            <div className='grid wide'>
                <div className={cx('login-section')}>
                    <div className={cx('title')}>
                        Đăng nhập tài khoản
                    </div>
                    <div className={cx('login-with-socialNetwork')}>
                        <div className={cx('login-btn', 'facebook')}>
                            <span>
                                <FontAwesomeIcon icon={faSquareFacebook} />
                            </span>
                            <p>
                                Facebook
                            </p>
                        </div>
                        <div className={cx('login-btn', 'google')}>
                            <span>
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </span>
                            <p>
                                Google
                            </p>
                        </div>
                    </div>
                    <div className={cx('login-form')}>
                        <input type="email" placeholder='Email'
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                        <input type="password" placeholder='Mật khẩu'
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                        />
                        <button className={cx('submit')}
                            onClick={() => checkAccount()}
                        >
                            Đăng nhập
                        </button>
                    </div>
                    <div className={cx('noti')}>
                        bạn chưa có tài khoản đăng ký <Link to={routes.signup}>tại đây!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login