import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, icon, title, activeIcon }) {
    return (
        <NavLink
            //Ở NavLink ta có thể truyền một func
            //, giá trị nav sẽ trả lại là 1 object, obj sẽ có key là isActive, isPending
            className={(nav) =>
                cx('menu-item', {
                    active: nav.isActive,
                })
            }
            to={to}
        >
            {(nav) => {
                //Tương tự ta truyền cho children một func 
                const currentIcon = nav.isActive ? activeIcon : icon;

                return (
                    <>
                        {currentIcon}
                        <span className={cx('title')}>{title}</span>
                    </>
                );
            }}
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    // activeIcon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default MenuItem;
