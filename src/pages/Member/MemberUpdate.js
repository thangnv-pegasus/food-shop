import styles from './Member.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../component/TitlePage'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

function MemberUpdate() {

    const id = useParams()

    const thisMember = id.memberId
    const data = JSON.parse(localStorage.getItem('account'))

    const initPass = data[thisMember - 1].password
    const [prePass, setPrePass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [checkPass, setCheckPass] = useState('')

    let change = true;

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('account'))
    },[change])

    const ChangePassword = () => {
        let check = false
        if (prePass === initPass && newPass === checkPass) {
            check = true
            change = !change
            for(let i=0;i<data.length;i++){
                if(data[i].id == thisMember){
                    data[i] = {...data[i], password: newPass}
                }
            }
            localStorage.setItem('account', JSON.stringify(data))
            alert('Đổi mật khẩu thành công!')
            setPrePass('')
            setNewPass('')
            setCheckPass('')
        }
        else {
            alert('Thông tin chưa trùng khớp')
        }
    }

    return (
        <div className={cx('member-page')}>
            <TitlePage>
                Thay đổi mật khẩu
            </TitlePage>
            <div className='grid wide'>
                <div className={cx('page-section')}>
                    <div className='row row-product'>
                        <div className='col l-3 m-12 c-12'>
                            <div className={cx('nav')}>
                                <div className={cx('title')}>
                                    Trang tài khoản
                                </div>
                                <ul>
                                    <li>
                                        <span className={cx('bold')}>Xin chào, </span>
                                        <span className={cx('primary')}> {data[thisMember - 1].fullName} </span>
                                    </li>
                                    <li>
                                        <NavLink to={`/member/${thisMember}`}
                                            className={(nav) => cx({
                                                active: nav.isActive
                                            })}
                                        >
                                            Thông tin tài khoản
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/member/${thisMember}/order`}
                                            className={(nav) => cx({
                                                active: nav.isActive
                                            })}
                                        >
                                            Đơn hàng của bạn
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/member/${thisMember}/changePassword`}
                                            className={(nav) => cx({
                                                active: nav.isActive
                                            })}
                                        >
                                            Đổi mật khẩu
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={`/member/${thisMember}/memberAddress`}
                                            className={(nav) => cx({
                                                active: nav.isActive
                                            })}
                                        >
                                            Số địa chỉ
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='col l-9 m-12 c-12'>
                            <div className={cx('title')}>
                                Đổi mật khẩu
                            </div>
                            <div className={cx('slogan')}>
                                Để đảm bảo tính bảo mật vui lòng đặt mật khẩu với ít nhất 8 kí tự
                            </div>
                            <form className={cx('form-change')} onSubmit={(e) => {
                                e.preventDefault()
                                ChangePassword()
                            }}>
                                <label for="pre-pass">
                                    Mật khẩu cũ
                                </label>
                                <input type="password" id='pre-pass'
                                    value={prePass}
                                    onChange={(e) => setPrePass(e.target.value)}
                                />
                                <label for="new-pass">
                                    Mật khẩu mới
                                </label>
                                <input type="password" id='new-pass'
                                    value={newPass}
                                    onChange={(e) => setNewPass(e.target.value)}
                                />
                                <label for="check-pass">
                                    Xác nhận mật khẩu
                                </label>
                                <input type="password" id='check-pass'
                                    value={checkPass}
                                    onChange={(e) => setCheckPass(e.target.value)}
                                />
                                <button className={cx('submit')}>
                                    Đặt lại mật khẩu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { MemberUpdate }