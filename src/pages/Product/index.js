import classNames from 'classnames/bind'
import styles from './Product.module.scss'
import TitlePage from '../../component/TitlePage'
import { useState } from 'react'
import ProductItem from './productItem'
import data from '../../data/db.json'

const cx = classNames.bind(styles)

function Product({ addCart, removeCart, setOpenBuyModal, setProductActive, setOpenInforModal }) {

    const [products, setProducts] = useState(data.products)


    const handleDefaultSort = () => {
        const newProd = products.sort((a, b) => {
            return a.id - b.id
        })
        setProducts([...newProd])
    }

    const handleReverseProduct = () => {
        const newProducts = products.sort((a, b) => {
            return b.id - a.id
        })
        setProducts([...newProducts])
    }
    const handleSortBigToSmall = () => {
        const dataNew = products.sort((a, b) => {
            return a.price_main - b.price_main
        })
        setProducts([...dataNew])
    }

    const handleSortSmallToBig = () => {
        const dataNew = products.sort((a, b) => {
            return b.price_main - a.price_main
        })
        setProducts([...dataNew])
    }

    return (
        <>
            <TitlePage>
                Tất cả sản phẩm
            </TitlePage>
            <div className={cx('all-products')}>
                <div className='grid wide'>
                    <div className={cx('options-allproduct')}>
                        <div className={cx('options__title')}>
                            Tất cả sản phẩm
                        </div>
                        <div className={cx('option-btns')}>
                            <span>
                                Sắp xếp theo:
                            </span>
                            <label className={cx('new-product')}>
                                <input type="radio" name="1" onChange={handleDefaultSort} />Hàng mới về
                            </label>
                            <label className={cx('new-product')}>
                                <input type="radio" name="1" onChange={handleReverseProduct} />Hàng cũ nhất
                            </label>
                            <label className={cx('new-product')}>
                                <input type="radio" name="1" onChange={handleSortBigToSmall} />Giá tăng dần
                            </label>
                            <label className={cx('new-product')} onChange={handleSortSmallToBig}>
                                <input type="radio" name="1" />Giá giảm dần
                            </label>
                        </div>
                    </div>
                    <div className={cx('products-section')}>
                        <div className='row'>
                            {
                                products.map((product, index) => {
                                    if (index < 12) {
                                        return (
                                            <div className='col c-3' key={index}>
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
                        <ul className={cx('page-number')}>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product