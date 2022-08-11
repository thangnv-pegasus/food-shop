import Tippy from '@tippyjs/react/headless';
import classNames from "classnames/bind"
import styles from './searchBlock.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(styles)

function SearchBlock({ children, searchValue, setSearchValue, Search }) {
    return (
        <Tippy
            render={attrs => (
                <div className={cx('search-block')} tabIndex="-1" {...attrs}>
                    <input type="text" placeholder='Tìm kiếm...'
                        value={searchValue}
                        onChange={(e) => { setSearchValue(e.target.value) }}
                    />
                    <button onClick={() => {
                        setSearchValue('')
                        Search()
                    }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            )}
            placement='bottom-end'
            interactive
            hideOnClick={false}
        >
            {children}
        </Tippy>
    )
}

export default SearchBlock