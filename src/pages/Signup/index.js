
import { faGooglePlusG, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import className from 'classnames/bind'
import { useContext, useState } from 'react'
import { account } from '../../App'
import TitlePage from '../../component/TitlePage'
import styles from './Signup.module.scss'

const cx = className.bind(styles)

function Signup({ setNewAccount }) {
    const acc = useContext(account)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const createAccount = () => {
        if(acc.email == email){
            alert('Email đã được đăng ký rồi!')
        }
        else if(acc.phone == phone){
            alert('Số điện thoại đã được đăng ký rồi!')
        }
        else {
            alert('Đăng ký thành công, hãy quay lại đăng nhập!')
            setNewAccount({
                name,
                email,
                phone,
                password
            })
        }
    }

    return (
        <div className={cx('signup')}>
            <TitlePage>
                Đăng ký tài khoản
            </TitlePage>
            <div className='grid wide'>
                <div className={cx('signup-section')}>
                    <div className={cx('title')}>
                        Đăng ký tài khoản
                    </div>
                    <div className={cx('signup-with-socialNetwork')}>
                        <div className={cx('signup-btn', 'facebook')}>
                            <span>
                                <FontAwesomeIcon icon={faSquareFacebook} />
                            </span>
                            <p>
                                Facebook
                            </p>
                        </div>
                        <div className={cx('signup-btn', 'google')}>
                            <span>
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </span>
                            <p>
                                Google
                            </p>
                        </div>
                    </div>
                    <div className={cx('signup-form')}>
                        <input type="text" placeholder='Họ và tên'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input type="email" placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="tel:+84" placeholder='Số điện thoại'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                        <input type="password" placeholder='Mật khẩu'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <button className={cx('submit')}
                            onClick={() => createAccount()}
                        >
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup