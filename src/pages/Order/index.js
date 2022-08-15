import { faAngleLeft, faMoneyBill1Wave, faMoneyCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import classNames from "classnames/bind"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { routes } from "../../config/routes"
import styles from './Order.module.scss'


const cx = classNames.bind(styles)

function Order({ cart, setUserinfor, userinfor, setCart }) {

    const [checkPay, setCheckPay] = useState(false)
    const [checkbtn, setCheckBtn] = useState(false)

    let size = 0;
    cart.forEach(product => {
        size += product.quantity
    })

    let total = 0;
    cart.forEach((product) => {
        if (product.price_sale) {
            total += product.price_sale * product.quantity
        }
        else {
            total += product.price_main * product.quantity
        }
    })
    const navigate = useNavigate()
    const checkInfor = () => {
        if (userinfor.name === '' || userinfor.email === '' || userinfor.phone === '' || userinfor.add === '') {
            alert('Vui lòng nhập đầy đủ thông tin!')
        }
        else if (!checkPay) {
            alert('Hãy xác nhận thanh toán khi giao hàng!')
        }
        else {
            navigate('/completeOrder')
        }
    }

    return (
        <div className={cx('order')}>
            <div className="grid wide">
                <div className={cx('order-section')}>
                    <div className={cx('shop-name')}>
                        Cool Organic
                    </div>
                    <div className="row row-product">
                        <div className="col c-12 l-4 m-12 ">
                            <div className={cx('user-infor')}>

                                <div className={cx("title")}>
                                    Thông tin nhận hàng
                                </div>
                                <form>
                                    <input type="text" placeholder="Email" className={cx('email')}
                                        value={userinfor.email}
                                        onChange={
                                            (e) => setUserinfor((pre) => ({ ...pre, email: e.target.value }))
                                        }
                                    />
                                    <input type="text" placeholder="Họ và tên" className={cx('username')}
                                        value={userinfor.username}
                                        onChange={(e) => setUserinfor((pre) => ({ ...pre, username: e.target.value }))}
                                    />
                                    <input type="tel:" placeholder="Số điện thoại(tùy chọn)" className={cx('phone-number')}
                                        value={userinfor.phone}
                                        onChange={(e) => setUserinfor((pre) => ({ ...pre, phone: e.target.value }))}
                                    />
                                    <input type="text" placeholder="Địa chỉ(tùy chọn)" className={cx('address')}
                                        value={userinfor.add}
                                        onChange={e => setUserinfor((pre) => ({ ...pre, add: e.target.value }))}
                                    />
                                    <textarea placeholder="Ghi chú"
                                        value={userinfor.note}
                                        onChange={e => setUserinfor(pre => ({ ...pre, note: e.target.value }))}
                                    />
                                </form>
                            </div>
                        </div>
                        <div className='col c-12 l-4 m-12'>
                            <div className={cx('ship')}>
                                <div className={cx("title")}>
                                    Vận chuyển
                                </div>
                                <div className={cx("ship-noti")}>
                                    Vui lòng nhập thông tin giao hàng
                                </div>
                                <div className={cx('ship-pay')}>
                                    <div className={cx('title')}>
                                        Thanh toán
                                    </div>
                                    <div className={cx('pay-form')}>
                                        <input type="radio" id="check-pay" onChange={() => { setCheckPay(true) }} />
                                        <label for="check-pay">
                                            Thanh toán khi giao hàng (COD)
                                            <span>
                                                <FontAwesomeIcon icon={faMoneyBill1Wave} />
                                            </span>
                                        </label>
                                    </div>
                                    {
                                        checkPay &&
                                        <div className={cx('check-complete')}>
                                            Bạn chỉ phải thanh toán khi nhận được hàng
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col c-12 l-4 m-12">
                            <div className={cx('cart')}>
                                <div className={cx('title', 'border')}>
                                    Đơn hàng ({size} sản phẩm)
                                </div>
                                <ul className={cx('list-product', 'border')}>
                                    {
                                        cart.map((product) => {
                                            return (
                                                <li className={cx('product-item')} key={product.id}>
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
                                                        {product.price_sale || product.price_main}đ
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className={cx('input-voucher', 'border')}>
                                    <input type="text" placeholder="Nhập mã giảm giá" />
                                    <button>
                                        Áp dụng
                                    </button>
                                </div>
                                <div className={cx('quick-sum', 'border')}>
                                    <div className={cx('temp-total')}>
                                        <p>Tạm tính</p>
                                        <p>{total}đ</p>
                                    </div>
                                    <div className={cx('charge-ship')}>
                                        <p>Phí vận chuyển</p>
                                        <p>40000đ</p>
                                    </div>
                                </div>
                                <div className={cx('price-result')}>
                                    <p>Tổng cộng</p>
                                    <p className={cx('result')}>{total + 40000}đ</p>
                                </div>
                                <div className={cx('selection')}>
                                    <Link to={routes.cart} className={cx('back-to-cart')}>
                                        <span>
                                            <FontAwesomeIcon icon={faAngleLeft} />
                                        </span>
                                        <p>
                                            Quay về giỏ hàng
                                        </p>
                                    </Link>
                                    <div to={routes.completeOrder} className={cx('complete')}
                                        onClick={() => checkInfor()}
                                    >
                                        Đặt hàng
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order