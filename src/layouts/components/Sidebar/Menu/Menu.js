import PropTypes from 'prop-types';
import styles from './Menu.module.scss';

function Menu({children}) {
    return <nav className={styles.nav}>
        {children}
    </nav>;
}

Menu.propTpyes = {
    children: PropTypes.node.isRequired
}

export default Menu;
