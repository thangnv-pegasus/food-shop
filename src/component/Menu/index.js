import styles from './Menu.module.scss'
import classNames from 'classnames/bind'
import Logo from '../Logo'
import { Link, NavLink } from 'react-router-dom'
import { routes } from '../../config/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

const cx = classNames.bind(styles)

function Menu({setMenuModal}) {

    const [check, setCheck] = useState(false)

    return (
        <div className={cx('overlay')} onClick = {()=>{setMenuModal(false)}}>
            <div className={cx('menu')} onClick = {(e)=>e.stopPropagation()}>
                <div className={cx('logo')}>
                    <Logo
                        src="https://bizweb.dktcdn.net/100/350/980/themes/802125/assets/logo.png?1658680172137"
                        alt="logo"
                    />
                </div>
                <ul className={cx('nav')}>
                    <li>
                        <NavLink to={routes.home} className={(nav) => cx({
                            active: nav.isActive
                        })}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.intro} className={(nav) => cx({
                            active: nav.isActive
                        })}>
                            Giới thiệu
                        </NavLink>
                    </li>
                    <li>
                        <div className={cx('content')}>
                            <NavLink to={routes.product}
                                className={(nav) => cx({
                                    active: nav.isActive
                                })}
                            >
                                Sản phẩm
                            </NavLink>
                            <div className={cx('more')}>
                                <FontAwesomeIcon icon={faAngleDown} onClick={() => setCheck(!check)} />
                            </div>
                        </div>
                        <ul className={cx('product-kind')}
                            style={check ? {
                                height: 'unset'
                            } : { height: '0' }}
                        >
                            <li>
                                <Link to={routes.vegetable}>
                                    Rau củ
                                </Link>
                            </li>
                            <li>
                                <Link to={routes.fruit}>
                                    Hoa quả
                                </Link>
                            </li>
                            <li>
                                <Link to={routes.seaFood}
                                >
                                    Hải sản
                                </Link>
                            </li>
                            <li>
                                <Link to={routes.nuts}>
                                    Các loại hạt
                                </Link>
                            </li>
                            <li>
                                <Link to={routes.freshFood}>
                                    Thực phẩm tươi sống
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={routes.news} className={(nav) => cx({
                            active: nav.isActive
                        })}>
                            Tin tức
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.contact} className={(nav) => cx({
                            active: nav.isActive
                        })}>
                            Liên hệ
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Menu