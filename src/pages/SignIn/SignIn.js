import { faGooglePlusG, faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import TitlePage from "../../component/TitlePage";
import styles from './SignInUp.module.scss'
import data from '../../data/db.json'
import { routes } from "../../config/routes";

const cx = classNames.bind(styles)

function SignIn({ setLogin,setUserLogin }) {

    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')

    const users = data.users
    const navigate = useNavigate()

    const checkAccount = () => {
        const account = JSON.parse(localStorage.getItem('account'))
        let check = false
        let i = 0;
        let id = 0;
        for (i; i < account.length; i++) {
            if (account[i].email === mail && account[i].password === pass) {
                check = true;
                id = account[i].id
                i = account.length
            }
        }
        if (check) {
            setLogin(true)
            navigate(`/member/${id}`)
            setUserLogin(id)
        }
        else {
            
            alert('Sai tài khoản hoặc mật khẩu!')
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
                    <form className={cx('login-form')} onSubmit={(e) => {
                        e.preventDefault()
                        checkAccount()
                    }}>
                        <input type="email" placeholder='Email'
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                        />
                        <input type="password" placeholder='Mật khẩu'
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                        />
                        <button type="submit" className={cx('submit')}
                        >
                            Đăng nhập
                        </button>
                    </form>
                    <div className={cx('noti')}>
                        bạn chưa có tài khoản đăng ký
                        <Link to={routes.signup}>tại đây!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SignIn }