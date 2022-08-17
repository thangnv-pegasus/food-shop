import styles from './ProductKindPage.module.scss'
import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import TitlePage from '../../component/TitlePage'
import ProductItem from '../../pages/Product/productItem'
import data from '../../data/db.json'

const cx = classNames.bind(styles)

function NutsPage({ addCart, removeCart, cart }) {

    const [products, setProducts] = useState(data.productKind[3].products)


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
    const refOption = useRef()
    useEffect(() => {

        const element = refOption.current
        element.addEventListener('change', (e) => {
            switch (e.target.value) {
                case '1':
                    handleDefaultSort()
                    break;
                case '2':
                    handleReverseProduct()
                    break;
                case '3':
                    handleSortBigToSmall()
                    break;
                case '4':
                    handleSortSmallToBig()
                    break;
            }
        })
    }, [])
    return (
        <>
            <TitlePage>
                Các loại hạt
            </TitlePage>
            <div className={cx('all-products')}>
                <div className='grid wide'>
                    <div className={cx('options-allproduct')}>
                        <div className={cx('options__title')}>
                            Các loại hạt
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
                            <label className={cx('new-product')}>
                                <input type="radio" name="1" onChange={handleSortSmallToBig} />Giá giảm dần
                            </label>
                        </div> <div className={cx('option-group')}>
                            <div className={cx('group-title')}>
                                Sắp xếp theo:
                            </div>
                            <select className={cx('select-btns-mobile')} ref={refOption}>
                                <option value="1">Hàng mới nhất</option>
                                <option value="2">Hàng cũ nhất</option>
                                <option value="3">Giá tăng dần</option>
                                <option value="4">Giá giảm dần</option>
                            </select>
                        </div>
                    </div>
                    <div className={cx('products-section')}>
                        <div className='row row-product'>
                            {
                                products.map((product, index) => {
                                    if (index < 12) {
                                        return (
                                            <div className='col l-3 m-4 c-6' key={index}>
                                                <ProductItem
                                                    cart={cart}
                                                    addCart={addCart}
                                                    product={product}
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
        </>
    )
}


export default NutsPage