import styles from './DetailProduct.module.scss'
import classNames from 'classnames/bind'
import { useParams } from 'react-router-dom'
import data from '../../data/db.json'
import TitlePage from '../../component/TitlePage'
import { useState } from 'react'
import Title from '../../component/Title'
import ProductItem from '../Product/productItem'

const cx = classNames.bind(styles)

function DetailProduct({ addCart, setOpenBuyModal, setProductActive, setOpenInforModal }) {

    const { productId } = useParams()
    const [quantity, setQuantity] = useState(1)
    const thisProduct = data.products.find(product => product.id == productId)

    return (
        <div className={cx('product-detail')}>
            <TitlePage>
                {thisProduct.name}
            </TitlePage>
            <div className='grid wide'>
                <div className={cx('product-detail__section')}>
                    <div className={cx('product-detail-infor')}>
                        <div className='row row-product'>
                            <div className='col l-6 m-12 c-12'>
                                <div className={cx('product-img')}>
                                    <img src={thisProduct.img_src} />
                                </div>
                                <div className={cx('product-list-img')}>
                                    <img src={thisProduct.img_src} />
                                </div>
                            </div>
                            <div className='col l-6 m-12 c-12'>
                                <div className={cx('product-infor')}>
                                    <div className={cx('product-name')}>
                                        {thisProduct.name}
                                    </div>
                                    <div className={cx('product-brand')}>
                                        <p>Thương hiệu: <span>{thisProduct.brand || 'Đang cập nhất'}</span></p>
                                        <p>Tình trạng: <span> {thisProduct.remain > 0 ? ('Còn hàng') : ('Hết hàng')} </span></p>
                                    </div>
                                    <div className={cx('product-price')}>
                                        {
                                            thisProduct.price_sale ? (
                                                <>
                                                    <span className={cx('price-sale')}>
                                                        {thisProduct.price_sale}đ
                                                    </span>
                                                    <span className={cx('price-main')}>
                                                        {thisProduct.price_main}đ
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className={cx('price-main', 'no-under')}>
                                                        {thisProduct.price_main}đ
                                                    </span>
                                                </>
                                            )
                                        }
                                    </div>
                                    <div className={cx('product-author')}>
                                        Nguồn gốc: {thisProduct.author}
                                    </div>
                                    <div className={cx('product-weight')}>
                                        Khối lượng: <span>{thisProduct.weight}kg/hộp</span>
                                    </div>
                                    <div className={cx('product-intro')}>
                                        {thisProduct.intro}
                                    </div>
                                </div>
                                <div className={cx('product-setCart')}>
                                    <div className={cx('set-quantity')}>
                                        <p>Số lượng: </p>
                                        <div className={cx('btns')}>
                                            <button className={cx('control')}
                                                onClick={() => {
                                                    if (quantity == 1) {
                                                        return;
                                                    }
                                                    else {
                                                        setQuantity(pre => pre - 1)
                                                    }
                                                }}
                                            >
                                                -
                                            </button>
                                            <button>
                                                {quantity}
                                            </button>
                                            <button className={cx('control')}
                                                onClick={() => setQuantity(pre => pre + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className={cx('add-to-cart')}>
                                        <button
                                            onClick={() => {
                                                addCart(thisProduct, quantity)
                                                setOpenBuyModal(true)
                                                setProductActive(thisProduct)
                                            }}
                                        >
                                            Thêm vào giỏ hàng
                                        </button>
                                    </div>
                                </div>
                                <div className={cx('call-shop')}>
                                    Gọi đặt mua: <a href="tel:+19006750">19006750</a> để nhanh chóng đặt hàng
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-theme')}>
                        <img src="https://bizweb.dktcdn.net/100/350/980/themes/802125/assets/bg_pro.jpg?1658680172137" />
                    </div>
                    <div className={cx('product-description')}>
                        <div className={cx('description-heading')}>
                            Mô tả sản phẩm
                        </div>
                        <div className={cx('description-content')}>
                            {
                                thisProduct.description.map((text, index) => {
                                    {
                                        if (index == thisProduct.description.length - 1) {
                                            return (
                                                <>
                                                    <div key={index} className={cx('decription-img')}>
                                                        <img src={thisProduct.img_src} />
                                                    </div>
                                                    <div className={cx('text')} >
                                                        {text}
                                                    </div>
                                                </>
                                            )
                                        }
                                        else {
                                            return (
                                                <div className={cx('text')}>
                                                    {text}
                                                </div>
                                            )
                                        }
                                    }
                                })
                            }
                        </div>

                    </div>
                    <div className={cx('related-product')}>
                        <Title>
                            Sản phẩm liên quan
                        </Title>
                        <div className={cx('list-related')}>
                            <div className='row row-product'>
                                {
                                    data.products.map((product, index) => {
                                        if (product.id == productId) {
                                            return;
                                        }
                                        if (index < 4) {
                                            return (
                                                <div key={product.id} className='col c-6 m-4 l-3'>
                                                    <ProductItem
                                                        addCart={addCart}
                                                        product={product}
                                                        setOpenBuyModal={setOpenBuyModal}
                                                        setProductActive={setProductActive}
                                                        setOpenInforModal={setOpenInforModal}
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailProduct