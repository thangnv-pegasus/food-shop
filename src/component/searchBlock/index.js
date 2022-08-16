import classNames from "classnames/bind"
import styles from './searchBlock.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
import data from '../../data/db.json'
import { Link, useNavigate } from "react-router-dom"
import Tippy from '@tippyjs/react/headless';


const cx = classNames.bind(styles)

function SearchBlock({children}) {

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
                <form className={cx('search-block')} tabIndex="-1" {...attrs} onSubmit = {()=>ToSearchPage()}>
                    <input type="text" placeholder="Tìm kiếm..." 
                        value = {searchValue}
                        onChange = {e => setSearchValue(e.target.value)}
                    />
                    <button>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
            )}
            placement='bottom-end'
            interactive
        >
            {children}
        </Tippy>


    )
}


export default SearchBlock