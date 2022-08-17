import styles from './Member.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../component/TitlePage'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function MemberAdd() {

    const id = useParams()

    const thisMember = id.memberId
    const data = JSON.parse(localStorage.getItem('account'))

    const initPass = data[thisMember - 1].password
    const [prePass, setPrePass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [checkPass, setCheckPass] = useState('')
    const [openModal, setOpenModal] = useState(false)

    const [nameAdd, setNameAdd] = useState('')
    const [phoneAdd, setPhoneAdd] = useState('')
    const [companyAdd, setCompanyAdd] = useState('')
    const [newAdd, setNewAdd] = useState('')
    const [codeZip, setCodeZip] = useState('')
    const [listAdd, setListAdd] = useState([])
    let change = true;

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('account'))
    }, [change])

    const ChangePassword = () => {
        let check = false
        if (prePass === initPass && newPass === checkPass) {
            check = true
            change = !change
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == thisMember) {
                    data[i] = { ...data[i], password: newPass }
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

    const createAddress = () => {
        setListAdd(pre => [
            ...pre,
            {
                id: pre.length + 1,
                name: nameAdd,
                phone: phoneAdd,
                company: companyAdd,
                address: newAdd,
                zip: codeZip
            }
        ])
        setNameAdd('')
        setPhoneAdd('')
        setCompanyAdd('')
        setNewAdd('')
        setCodeZip('')
    }

    const removeAdd = (e) => {
        const list = listAdd.filter(add => {
            return add.id != e.target.id
        })
        setListAdd(list)
    }

    return (
        <div className={cx('member-page')}>
            <TitlePage>
                Trang đơn hàng
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
                                Địa chỉ của bạn
                            </div>
                            <button className={cx('create-address')}
                                onClick={() => setOpenModal(true)}
                            >
                                Thêm địa chỉ
                            </button>
                            <ul className={cx('list-add')}>
                                {
                                    listAdd.map((add, index) => {
                                        return (
                                            <li key={index}>
                                                <div className={cx('add-infor')}>
                                                    <div>
                                                        <span className={cx('bold')}>Họ tên:</span>
                                                        <span>{add.name}</span>
                                                    </div>
                                                    <div>
                                                        <span className={cx('bold')}>Địa chỉ:</span>
                                                        <span>{add.address}</span>
                                                    </div>
                                                    <div>
                                                        <span className={cx('bold')}>Số điện thoại: </span>
                                                        <span> {add.phone} </span>
                                                    </div>
                                                    <div>
                                                        <span className={cx('bold')}>Công ty:</span>
                                                        <span> {add.company} </span>
                                                    </div>
                                                </div>
                                                <button className={cx('remove-add')} id = {`${add.id}`} onClick = {(e)=>removeAdd(e)}>
                                                    Xóa
                                                </button>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {
                openModal && (
                    <div className={cx('modal')} onClick = {()=>setOpenModal(false)}>
                        <div className={cx('modal-section')}
                            onClick = {(e)=>e.stopPropagation()}
                        >
                            <div className={cx('modal-title')}>
                                <div>
                                    Thêm địa chỉ mới
                                </div>
                                <div className={cx('modal-icon')}
                                    onClick={() => setOpenModal(false)}
                                >
                                    <FontAwesomeIcon icon={faXmark} />
                                </div>
                            </div>
                            <form className={cx('modal-form')}
                                onSubmit={(e) => {
                                    e.preventDefault()
                                    createAddress()
                                    setOpenModal(false)
                                }}
                            >
                                <input type="text" placeholder='Họ tên'
                                    value={nameAdd}
                                    onChange={(e) => setNameAdd(e.target.value)}
                                />
                                <input type="tel" placeholder='Số điện thoại'
                                    value={phoneAdd}
                                    onChange={(e) => setPhoneAdd(e.target.value)}
                                />
                                <input type="text" placeholder='Công ty'
                                    value={companyAdd}
                                    onChange={(e) => setCompanyAdd(e.target.value)}
                                />
                                <input type="text" placeholder='Địa chỉ'
                                    value={newAdd}
                                    onChange={(e) => setNewAdd(e.target.value)}
                                />
                                <input type="text" placeholder='Mã Zip'
                                    value={codeZip}
                                    onChange={(e) => setCodeZip(e.target.value)}
                                />
                                <div className={cx('modal-btn')}>
                                    <div className={cx('cancel')}
                                        onClick={() => setOpenModal(false)}
                                    >
                                        Hủy
                                    </div>
                                    <button className={cx('create-add')}>
                                        Thêm địa chỉ
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export { MemberAdd }