import styles from './ShoppingCart.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function ShoppingCart({ children, ListProduct, removeCart }) {
    let total = 0;
    ListProduct.forEach(element => {
        if (element.price_sale > 0) {
            total += element.price_sale * element.quantity
        }
        else {
            total += element.price_main * element.quantity
        }
    });
    return (
        <Tippy
            render={attrs => (
                <div className={cx('cart')} tabIndex="-1" {...attrs}>
                    {
                        ListProduct.length > 0 ? (
                            <div>
                                {
                                    ListProduct.map((prod, index) => {

                                        return (

                                            <div key={index} className={cx('product-item')}>
                                                <div className={cx('product-img')}>
                                                    <img src={prod.img_src} alt="product" />
                                                </div>
                                                <div className={cx('product-infor')}>
                                                    <div className={cx('product-name')}>
                                                        {prod.name}
                                                    </div>
                                                    <div className={cx('product-price')}>
                                                        <div>
                                                            {prod.price_sale || prod.price_main}đ
                                                        </div>
                                                        <span> x{prod.quantity} </span>
                                                    </div>
                                                </div>
                                                <div className={cx('close-icon')} onClick={()=>removeCart(prod)}>
                                                    <FontAwesomeIcon icon={faXmark} className={cx('icon')} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                <div className={cx('total')}>
                                    <div className={cx('total-price')}>
                                        Tổng cộng:<span> {total}đ </span>
                                    </div>
                                    <button>
                                        Tiến hành thanh toán
                                    </button>
                                </div>
                            </div>

                        ) : (
                            <p className={cx('no-prod')}> Không có sản phẩm nào trong giỏ hàng. </p>
                        )
                    }
                </div >
            )}
            placement='bottom-end'
            interactive
        >
            {children}
        </Tippy >
    )
}

export default ShoppingCart