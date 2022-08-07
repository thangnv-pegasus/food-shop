import styles from './Product.module.scss'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react/headless';
import { Link, NavLink } from 'react-router-dom';


const cx = classNames.bind(styles)

function ProductKind({ children, to }) {
    return (
        <NavLink to = {to} className = {(nav)=>cx('kind',{
            active: nav.isActive
        })}>
            {children}
        </NavLink>
        
       
    )
}

export default ProductKind

