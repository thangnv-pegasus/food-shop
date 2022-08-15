import classNames from "classnames/bind"
import { useParams } from "react-router-dom"
import TitlePage from "../../component/TitlePage"
import styles from './SearchResult.module.scss'
import data from '../../data/db.json'
import ProductItem from "../Product/productItem"

const cx = classNames.bind(styles)

function SearchResult({ addCart, setOpenBuyModal, setProductActive, setOpenInforModal }) {

    const result = useParams()

    const products = data.products

    const searchResult = []
    if (result.searchValue.trim() !== '') {
        products.forEach(product => {
            let productName = product.name.toUpperCase()
            let value1 = result.searchValue.toUpperCase()
            if (productName.includes(value1)) {
                searchResult.push(product)
            }

        })
    }

    return (
        <div className={cx('search-result-page')}>
            <TitlePage>
                {result.searchValue} - Cool Organic
            </TitlePage>
            <div className='grid wide'>
                <div className={cx('search-result__section')}>
                    <div className={cx('title')}>
                        Trang tìm kiếm
                    </div>
                    {
                        searchResult.length > 0 ? (
                            <>
                                <div className={cx('noti')}>
                                    Có {searchResult.length} kết quả tìm kiếm phù hợp
                                </div>
                                <div className='row'>
                                    {
                                        searchResult.map(product => {
                                            return (
                                                <div className='col c-6 m-4 l-3' key={product.id}>
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
                            </>

                        ) : (
                            <div className={cx('noti')}>
                                Không tìm thấy kết quả nào với từ khóa trên
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


export default SearchResult
