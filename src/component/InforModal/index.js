import styles from './InforModal.module.scss'
import classNames from 'classnames/bind'
import { useReducer } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function InforModal({ product, setOpenInforModal, addCart, setOpenBuyModal }) {
    const initState = 1;
    const PUSH_ACTION = 'push'
    const POP_ACTION = 'pop'
    const reducer = (state, action) => {
        switch (action) {
            case PUSH_ACTION:
                return state + 1
            case POP_ACTION:
                if (state > 1) {
                    return state - 1
                } else {
                    return 1
                }
            default:
                throw new Error('Lỗi');
        }
    }
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <div className={cx('overlay')} onClick={() => setOpenInforModal(false)}>
            <div className={cx('section')} onClick={(e) => e.stopPropagation()}>
                <div className={cx('product-img')}>
                    <div className={cx('main-img')}>
                        <img src={product.img_src} alt='product' />
                    </div>
                    <div className={cx('sub-img', 'active')}>
                        <img src={product.img_src} alt='product' />
                    </div>
                </div>
                <div className={cx('product-infor')}>
                    <h1 className={cx('product-name')}>
                        {product.name}
                    </h1>
                    <div className={cx('product-brand')}>
                        <p>Thương hiệu: {product.brand}</p>
                        <p>Tình trạng: {product.remain > 0 ? ('Còn hàng') : ('Hết hàng')}</p>
                    </div>
                    <div className={cx('product-price')}>
                        {
                            product.price_sale ?
                                (
                                    <>
                                        <div className={cx('price-sale', 'primary')}>
                                            {product.price_sale}đ
                                        </div>
                                        <div className={cx('price-main')}>
                                            {product.price_main}đ
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className={cx('price-main', 'no-under')}>
                                            {product.price_main}đ
                                        </div>
                                    </>
                                )
                        }

                    </div>
                    <div className={cx('product-author')}>
                        Nguồn gốc: {product.author}
                    </div>
                    <div className={cx('product-weight')}>
                        Khối lượng: {product.weight} kg/hộp
                    </div>
                    <div className={cx('product-intro')}>
                        {product.intro}
                    </div>
                    <div className={cx('buy-btn')}>
                        <span>Số lượng: </span>
                        <div>
                            <button onClick={() => dispatch(POP_ACTION)}>
                                -
                            </button>
                            <button>
                                {state}
                            </button>
                            <button onClick={() => dispatch(PUSH_ACTION)}>
                                +
                            </button>
                        </div>
                    </div>
                    <button className={cx('add-to-cart')}
                        onClick={() => {
                            addCart(product, state)
                            setOpenBuyModal(true)
                            setOpenInforModal(false)
                        }}
                    >
                        Thêm vào giỏ hàng
                    </button>
                    <div className={cx('call-shop')}>
                        Gọi đặt mua: <a href="tel:+19006750">19006750</a> để nhanh chóng đặt hàng
                    </div>
                    <div className={cx('close-modal')} onClick={() => setOpenInforModal(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default InforModal