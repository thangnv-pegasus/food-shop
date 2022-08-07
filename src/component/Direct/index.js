import styles from './Direct.module.scss'
import classNames from 'classnames/bind'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function Direct({ children, path, NavLink,href, leftIcon=false, rightIcon=false }) {
    let ChildrenIcon = children;
    if(leftIcon){
        ChildrenIcon = () => {
            return (
                <div>
                    <span> {leftIcon} </span> {children}
                </div>
            )
        }
    }
    else if(rightIcon){
        ChildrenIcon = () => {
            return (
                <div>
                   {children} <span> {rightIcon} </span>
                </div>
            )
        }
    }
    let Element = NavLink
    if(href || !NavLink){
        Element = 'a'
    }
    return (
        <div className='item'>
            {
                NavLink ? (
                    <Element to={path}
                        className={(nav) => cx({
                            active: nav.isActive
                        })}
                    >
                        {ChildrenIcon}
                    </Element>
                ) : (
                    <Element>
                        {ChildrenIcon}
                    </Element>
                )
            }
        </div>
    )
}

export default Direct