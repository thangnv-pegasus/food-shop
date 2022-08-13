import styles from './BuyModal.module.scss'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles)

function BuyModal({ product, cart, setOpenBuyModal, setCart }) {
    let total = 0;
    cart.forEach(element => {
        if (element.price_sale > 0) {
            total += element.price_sale * element.quantity
        }
        else {
            total += element.price_main * element.quantity
        }
    });
    let size = 0;
    cart.forEach(product => {
        size += product.quantity
    })

    const navigate = useNavigate()

    const goToCart = () => {
        navigate('/cart')
        window.scrollTo(0,0)
        setOpenBuyModal(false)
    }

    return (
        <div className={cx('overlay')}
            onClick={() => {
                setOpenBuyModal(false)
            }}
        >
            <div className={cx('section')} onClick={(e)=>e.stopPropagation()}>
                <div className={cx('infor-product', 'left')}>
                    <div className={cx('noti')}>
                        <span>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        Sản phẩm đã được thêm vào giỏ hàng
                    </div>
                    <div className={cx('product')}>
                        <div className={cx('product-img')}>
                            <img src={product.img_src} alt="product" />
                        </div>
                        <div className={cx('product-name')}>
                            {product.name}
                            <p>
                                {product.price_sale || product.price_main}đ
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('infor-product', 'right')}>
                    <div className={cx('noti')}>
                        Giỏ hàng của bạn ({size} sản phẩm)
                    </div>
                    <div className={cx('total-price')}>
                        Tổng tiền: <span>{total}đ</span>
                    </div>
                    <button className={cx('pay')} onClick = {()=>goToCart()}>
                        Tiến hành thanh toán
                    </button>
                    <div className={cx('close-modal')} onClick={() => setOpenBuyModal(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyModal