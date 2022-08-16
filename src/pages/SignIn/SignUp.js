import { faGooglePlusG, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TitlePage from "../../component/TitlePage";
import styles from './SignInUp.module.scss'
import data from '../../data/db.json'
import { routes } from "../../config/routes";

const cx = classNames.bind(styles)

function SignUp() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [newAccount, setNewAccount] = useState([...data.users])
    const refForm = useRef()

    const users = data.users


    const checkAccount = () => {
        const account = JSON.parse(localStorage.getItem('account'))
        let check = false
        users.forEach((user) => {
            if (user.email === email && user.phone === phone) {
                check = true;
            }
        })
        account.forEach((user) => {
            if (user.email === email && user.phone === phone) {
                check = true;
            }
        })
        if (check) {
            alert('Số điện thoại hoặc email này đã được đăng ký rồi!')
        }
        else {
            alert('Đăng ký thành công, hãy quay lại đăng nhập!')
            setNewAccount(pre => [...pre, {
                id: pre.length+1,
                fullName: name,
                email,
                phone,
                password
            }])
        }
    }

    useEffect(() => {
        localStorage.setItem('account', JSON.stringify(newAccount))
    }, [newAccount])



    return (
        <div className={cx('login')}>
            <TitlePage>
                Đăng ký tài khoản
            </TitlePage>
            <div className='grid wide'>
                <div className={cx('login-section')}>
                    <div className={cx('title')}>
                        Đăng ký tài khoản
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
                    <form className={cx('login-form')}
                        onSubmit={e => {
                            e.preventDefault()
                            checkAccount()
                        }}
                    >
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
                        <button className={cx('submit')}>
                            Đăng ký
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { SignUp }