import classNames from "classnames/bind"
import styles from './searchBlock.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
import data from '../../data/db.json'
import { Link, useNavigate } from "react-router-dom"
import Tippy from '@tippyjs/react/headless';


const cx = classNames.bind(styles)

function SearchBlock() {

    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(false)
    const inputRef = useRef()

    const products = data.products

    useEffect(() => {
        const result2 = []
        if (searchValue.trim() !== '') {
            products.forEach(product => {
                let productName = product.name.toUpperCase()
                let value1 = searchValue.toUpperCase()
                if (productName.includes(value1)) {
                    result2.push(product)
                }

            })
            setSearchResult(result2)
        }
    }, [searchValue])

    useEffect(()=>{
        const InputElement = inputRef.current
        InputElement.addEventListener('keyup',(e)=>{
            if(e.keyCode === 13){
                e.preventDefault()
                return ToSearchPage()
            }
            else{
                return;
            }
        })
    },[])

    const navigate = useNavigate()

    const ToSearchPage = () => {
        if (searchValue.trim() === '') {
            return;
        }
        else {
            navigate(`/search/${searchValue}`)
            setSearchValue('')
            setShowResult(false)
        }
    }

    return (


        <Tippy
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    {
                        searchResult.map(product => {
                            return (
                                <Link to={`/product/${product.id}`}
                                    className={cx('product')}
                                    key={product.id}
                                >
                                    <div className={cx("product-img")}>
                                        <img src={product.img_src} />
                                    </div>
                                    <div className={cx('product-infor')}>
                                        <div className={cx('product-name')}>
                                            {product.name}
                                        </div>
                                        <div className={cx('product-price')}>
                                            {
                                                product.price_sale ? (
                                                    <>
                                                        <span className={cx('price-sale')}>
                                                            {product.price_sale}đ
                                                        </span>
                                                        <span className={cx('price-main')}>
                                                            {product.price_main}đ
                                                        </span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className={cx('price-main', 'no-under')}>
                                                            {product.price_main}đ
                                                        </span>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            )}
            placement='bottom'
            visible={searchResult.length > 0 && showResult}
            interactive
            onClickOutside={() => setShowResult(false)}
        >
            <div className={cx('search-block')}>
                <input type="text" placeholder='Tìm kiếm...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                    ref = {inputRef}
                />
                <button className={cx('search-btn')}
                    onClick={() => ToSearchPage()}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>


    )
}


export default SearchBlock