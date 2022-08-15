import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBasketShopping, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react/headless';

import Logo from '../../../component/Logo'
import { routes } from '../../../config/routes'
import SearchBlock from '../../../component/searchBlock';
import ShoppingCart from '../../../component/ShoppingCart';
import ProductKind from '../../../pages/Product/productKind'
import Direct from '../../../component/Direct';
import data from '../../../data/db.json'
import { useEffect, useRef } from 'react'

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



function Header({ cart, removeCart, setMenuModal }) {
    const productKind = data.productKind
    const products = data.products

    // const menuRef = useRef(null)
    // useEffect(()=>{
    //     let element = menuRef.current

    //     element.addEventListener('click',()=>{
    //         handleMenu()
    //     })
    // },[])

    return (
        <div className={cx('header')}>
            <div className={cx('grid wide')}>
                <div className={cx('header-section')}>
                    <div className={cx('col c-4 m-2 l-0')}>
                        <div className={cx('menu')} onClick={()=>setMenuModal(true)}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>
                    <div className={cx('col c-0 m-7 l-2')}>
                        <div className={cx('logo')}>
                            <Logo
                                src="https://bizweb.dktcdn.net/100/350/980/themes/802125/assets/logo.png?1658680172137"
                                alt="logo"
                            />
                        </div>
                    </div>
                    <div className={cx('col c-0 m-0 l-7')}>
                        <ul className={cx('nav')}>
                            {
                                Directions.map((direct, index) => {
                                    if (direct.id == 3) {
                                        return (
                                            <li key={index}>
                                                <Tippy
                                                    render={attrs => (
                                                        <div className={cx("product-kinds")} tabIndex="-1" {...attrs}>
                                                            {
                                                                productKind.map((prod, index) => {
                                                                    return (
                                                                        <div key={index}>
                                                                            <ProductKind to={prod.path}>
                                                                                {prod.kind_name}
                                                                            </ProductKind>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )}
                                                    placement='bottom-start'
                                                    interactive
                                                >
                                                    <NavLink to={direct.path}
                                                        className={(nav) => {
                                                            return cx('nav-item', {
                                                                active: nav.isActive
                                                            })
                                                        }}
                                                    >
                                                        {direct.name} <span> <FontAwesomeIcon icon={faCaretDown} /> </span>
                                                    </NavLink>
                                                </Tippy>
                                            </li>
                                        )
                                    }
                                    return (
                                        <li key={index}>
                                            <Direct
                                                children={direct.name}
                                                path={direct.path}
                                                NavLink={NavLink}
                                            />
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className={cx('col c-8 m-3 l-3')}>
                        <ul className={cx('cart-group')}>
                            <li className={cx('search-btn')}>
                                <SearchBlock />
                            </li>
                            <li>
                                <ShoppingCart ListProduct={cart} removeCart={removeCart}>
                                    <Link to={routes.cart} cart={cart}>
                                        <div className={cx('cart-shopping')}>
                                            <FontAwesomeIcon icon={faBasketShopping} />
                                            <div className={cx('cart-size')}>
                                                {cart.length}
                                            </div>
                                        </div>
                                    </Link>
                                </ShoppingCart>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header