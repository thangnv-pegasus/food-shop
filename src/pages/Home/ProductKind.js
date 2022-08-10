import styles from './Home.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'

const cx = classNames.bind(styles)

function ProductKind() {
    return (
        <ul className={cx('product-kind')}>
            <li>
                <NavLink to="/products"
                    className={(nav) => {
                        cx('link', {
                            active: nav.isActive
                        })
                    }}
                >
                    Rau củ
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact"
                    className={(nav) => {
                        cx('link', {
                            active: nav.isActive
                        })
                    }}
                >
                    Hoa quả
                </NavLink>
            </li>
            <li>
                <NavLink to="/more"
                    className={(nav) => {
                        cx('link', {
                            active: nav.isActive
                        })
                    }}
                >
                    Hải sản
                </NavLink>
            </li>
            <li>
                <NavLink to="/abcd"
                    className={(nav) => {
                        cx('link', {
                            active: nav.isActive
                        })
                    }}
                >
                    Các loại hạt
                </NavLink>
            </li>
            <li>
                <NavLink to="/sdfap"
                    className={(nav) => {
                        cx('link', {
                            active: nav.isActive
                        })
                    }}
                >
                    Thực phẩm tươi sống
                </NavLink>
            </li>
        </ul>
    )
}

export default ProductKind