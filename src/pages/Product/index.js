import classNames from 'classnames/bind'
import styles from './Product.module.scss'
import TitlePage from '../../component/TitlePage'
import { useEffect, useRef, useState } from 'react'
import ProductItem from './productItem'
import data from '../../data/db.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function Product({ addCart, removeCart, setOpenBuyModal, setProductActive, setOpenInforModal }) {

    const [products, setProducts] = useState(data.products)
    const [currentPage, setCurrentPage] = useState(0)

    const refOption = useRef()

    const [pageRender, setPageRender] = useState()

    useEffect(() => {
        setPageRender(result[0])
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

    function SplitArray(arr, current) {
        let NewArray = []
        for (let i = 0; i < arr.length; i += current) {
            let temp = arr.slice(i, i + current)
            NewArray.push(temp)
        }
        return NewArray
    }
    const result = SplitArray(products, 8)

    useEffect(() => {

        const element = refOption.current
        element.addEventListener('change', (e) => {
            switch(e.target.value){
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
                                <input type="radio" name="1" onChange={handleDefaultSort} />Hàng mới nhất
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
                        <div className={cx('option-group')}>
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
                                result[currentPage].map((product, index) => {
                                    return (
                                        <div className='col c-6 m-4 l-3' key={index}>
                                            <ProductItem
                                                addCart={addCart}
                                                product={product}
                                                setOpenBuyModal={setOpenBuyModal}
                                                setProductActive={setProductActive}
                                                setOpenInforModal={setOpenInforModal}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <ul className={cx('page-number')}>
                            {
                                result.map((list, index) => {
                                    return (
                                        <li key={index} onClick={() => { setCurrentPage(index) }}
                                            style={index === currentPage ? {
                                                borderColor: 'var(--primary-color)'
                                            } : {}}
                                        >
                                            {index + 1}
                                        </li>
                                    )
                                })
                            }
                            <li onClick={() => {
                                if (currentPage < result.length - 1) {
                                    setCurrentPage(currentPage + 1)
                                } else {
                                    return;
                                }
                            }}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product