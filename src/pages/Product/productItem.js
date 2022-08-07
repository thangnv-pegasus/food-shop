import styles from './Product.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const cx = classNames.bind(styles)

function ProductItem({ img_src, name, price_main, price_sale, to, addCart, product, setOpenBuyModal, setProductActive }) {

    

    return (
        <div className={cx('product-item')}>
            <NavLink to={to} className={cx('product-img')}>
                <img src={img_src} />

            </NavLink>
            <div className={cx('options')}>
                <div className={cx('options-icon')}>
                    <div className={cx('cart-icon')}
                        onClick={() => {
                            addCart(product)
                            setOpenBuyModal(true)
                            setProductActive(product)
                        }}
                    >
                        <FontAwesomeIcon icon={faBasketShopping} />
                    </div>
                    <div className={cx('infor-icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
            </div>
            <div className={cx('product-infor')}>
                <NavLink to={to} className={cx('product-name')}>
                    {name}
                </NavLink>
                <div className={cx('product-price')}>
                    {
                        price_sale ? (
                            <>
                                <span className={cx('price-sale')}>{price_sale}đ</span>
                                <span className={cx('price-main')}>{price_main}đ</span>
                            </>
                        ) : (
                            <>
                                <span className={cx('price-main', 'no-under')}>{price_main}đ</span>
                            </>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default ProductItem