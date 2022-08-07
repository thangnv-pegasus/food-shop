import classNames from 'classnames/bind'
import styles from './Product.module.scss'
import TitlePage from '~/component/TitlePage'
import { useEffect, useRef, useState } from 'react'
import ProductItem from './productItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Product() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(res => {
                setProducts(res)
            })
    }, [])

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
                                                    img_src={product.img_src}
                                                    name={product.name}
                                                    price_main={product.price_main}
                                                    price_sale={product.price_sale}
                                                    to={product.to}
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