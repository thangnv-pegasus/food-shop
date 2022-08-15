import styles from './CompleteOrder.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPrint } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { routes } from '../../config/routes'

const cx = classNames.bind(styles)

function CompleteOrder({ cart, userinfor, setCart }) {

    let sizeCart = 0;
    cart.forEach(product => {
        sizeCart += product.quantity
    })

    let total = 0;
    cart.forEach(product => {
        total += product.price_sale * product.quantity || product.price_main * product.quantity
    })

    return (
        <div className={cx('complete-order')}>
            <div className='grid wide'>
                <div className={cx('complete-order__section')}>
                    <div className={cx('shop-name')}>
                        Cool Organic
                    </div>
                    <div className='row row-product'>
                        <div className='col l-6 m-12'>
                            <div className={cx('heading')}>
                                <div className={cx('heading-icon')}>
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                                <div className={cx('title')}>
                                    <div>
                                        Cảm ơn bạn đã đặt hàng
                                    </div>
                                    <p>
                                        Một email xác nhận đã được gửi tới thangcattle@gmail.com.
                                        Xin vui lòng kiểm tra email của bạn
                                    </p>
                                </div>
                            </div>
                            <div className={cx('user-infor')}>
                                <div className='row no-gutters row-product'>
                                    <div className='col l-6 m-6'>
                                        <div className={cx('infor-title')}>
                                            Thông tin mua hàng
                                            <p>{userinfor.username}</p>
                                            <p>{userinfor.email}</p>
                                            <p>{userinfor.phone}</p>
                                            <p>{userinfor.note}</p>
                                        </div>
                                    </div>
                                    <div className='col l-6 m-6 c-12'>
                                        <div className={cx('infor-title')}>
                                            Địa chỉ nhận hàng
                                            <p>{userinfor.username}</p>
                                            <p>{userinfor.add}</p>
                                            <p>{userinfor.phone}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row no-gutters row-product'>
                                    <div className='col l-6 m-6 c-12'>
                                        <div className={cx('infor-title')}>
                                            Phương thức thanh toán
                                            <p>Than toán khi giao hàng (COD)</p>
                                        </div>
                                    </div>
                                    <div className='col l-6 m-6 c-12'>
                                        <div className={cx('infor-title')}>
                                            Phương thức vận chuyển
                                            <p>Giao hàng tận nơi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col l-6 m-12 c-12'>
                            <div className={cx('sumary')}>
                                <div className={cx('sumary-title', 'border')}>
                                    Đơn hàng #1 ({sizeCart} Sản phẩm)
                                </div>
                                <ul className={cx('list-product')}>
                                    {
                                        cart.map((product) => {
                                            return (
                                                <li key={product.id} className={cx('product-item', 'border')}>
                                                    <div className={cx('product-infor')}>
                                                        <div className={cx('product-img')}>
                                                            <img src={product.img_src} alt="product" />
                                                            <div className={cx('product-quantity')}>
                                                                {product.quantity}
                                                            </div>
                                                        </div>
                                                        <div className={cx('product-name')}>
                                                            {product.name}
                                                        </div>
                                                    </div>
                                                    <div className={cx('product-price')}>
                                                        {product.price_sale * product.quantity || product.price_main * product.quantity}đ
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className={cx('temp-total', 'border')}>
                                    <div>
                                        <p>Tạm tính</p>
                                        <p>{total}đ</p>
                                    </div>
                                    <div>
                                        <p>Phí vận chuyển</p>
                                        <p>40.000đ</p>
                                    </div>
                                </div>
                                <div className={cx('result')}>
                                    <p>Tổng cộng</p>
                                    <p className={cx('result-price')}>
                                        {total + 40000}đ
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('selection')}>
                        <Link to={routes.home} onClick={()=>{setCart([])}}>
                            Tiếp tục mua hàng
                        </Link>
                        <div className={cx('print')} 
                            onClick={(e) => window.print()}
                        >
                            <FontAwesomeIcon icon={faPrint} />
                            <p>In</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CompleteOrder
