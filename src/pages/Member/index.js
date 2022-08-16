import styles from './Member.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../component/TitlePage'
import { NavLink, useParams } from 'react-router-dom'

const cx = classNames.bind(styles)

function Member() {

    const id = useParams()

    const thisMember = id.memberId
    const data = JSON.parse(localStorage.getItem('account'))
    return (
        <div className={cx('member-page')}>
            <TitlePage>
                Trang khách hàng
            </TitlePage>
            <div className='grid wide'>
                <div className={cx('page-section')}>
                    <div className='row row-product'>
                        <div className='col l-3'>
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
                        <div className='col l-9'>
                            <div className={cx('content')}>
                                <div className={cx('title')}>
                                    Thông tin tài khoản
                                </div>
                                <ul className={cx('text')}>
                                    <li>
                                        <span className={cx('bold')}>Họ tên:</span>
                                        <span>{data[thisMember - 1].fullName}</span>
                                    </li>
                                    <li>
                                        <span className={cx('bold')}>Email: </span>
                                        <span>{data[thisMember - 1].email}</span>
                                    </li>
                                    <li>
                                        <span className={cx('bold')}>Điện thoại: </span>
                                        <span>{data[thisMember - 1].phone}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member