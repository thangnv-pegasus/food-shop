import styles from './Cart.module.scss'
import classNames from 'classnames/bind'
import TitlePage from '../../component/TitlePage'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { routes } from '../../config/routes'

const cx = classNames.bind(styles)

function Cart({ cart, addCart, removeCart, setCart }) {

    let size = 0;
    cart.forEach(product => {
        size += product.quantity
    })
    let total = 0;
    cart.forEach(product => {
        if (product.price_sale) {
            total += product.price_sale * product.quantity
        }
        else {
            total += product.price_main * product.quantity
        }
    })
    return (
        <div className={cx('cart-page')}>
            <TitlePage>
                Giỏ hàng
            </TitlePage>
            <div className='grid wide'>
                <div className={cx('cart-page__section')}>
                    <div className={cx('title')}>
                        Giỏ hàng của bạn ( {size} sản phẩm )
                    </div>
                    {
                        size > 0 ? (
                            <ul className={cx('list-product')}>
                                {
                                    cart.map((product, index) => {
                                        return (
                                            <li className={cx('product-item')} key={index}>
                                                <div className={cx('product-infor')}>
                                                    <Link to={`/product/${product.id}`} className={cx('product-img')}>
                                                        <img src={product.img_src} alt="product" />
                                                    </Link>
                                                    <div className={cx('product-name')}>
                                                        <Link to={`/product/${product.id}`}>
                                                            {product.name}
                                                        </Link>
                                                        <div className={cx('product-price')}>
                                                            {product.price_sale || product.price_main}đ
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('product-details')}>
                                                    <div className={cx('product-quantity')}>
                                                        <button onClick={() => removeCart(product)}>
                                                            -
                                                        </button>
                                                        <button>
                                                            {product.quantity}
                                                        </button>
                                                        <button onClick={() => addCart(product)}>
                                                            +
                                                        </button>
                                                    </div>
                                                    <div className={cx('product-total')}>
                                                        <div className={cx('total-price')}>
                                                            <p>
                                                                Tổng tiền:
                                                            </p>
                                                            <div className={cx('product-price')}>
                                                                {
                                                                    product.price_sale * product.quantity ||
                                                                    product.price_main * product.quantity
                                                                }đ
                                                            </div>
                                                        </div>
                                                        <button className={cx('remove-btn')}
                                                            onClick={() => {
                                                                const newC = cart.filter((item) => {
                                                                    return item.id !== product.id
                                                                })
                                                                setCart(newC)
                                                            }}
                                                        >
                                                            <span>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </span>
                                                            Xóa
                                                        </button>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                <li className={cx('pay')}>
                                    Thành tiền: <span>{total}đ</span>
                                </li>
                                <li className={cx('user-option')}>
                                    <Link to={routes.product} className={cx('continue')}>
                                        Tiếp tục mua hàng
                                    </Link>
                                    <Link to={routes.order} className={cx('order')}>
                                        Đặt hàng ngay
                                    </Link>
                                </li>
                            </ul>
                        ) : (
                            <div className={cx('cart-noti')}>
                                Không có sản phẩm nào trong giỏ hàng. Quay lại cửa hàng để tiếp tục mua sắm.
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart