import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function MenuItem({ to, icon, title }) {
    return (
        <NavLink to={to}>
            {icon}
            <span>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default MenuItem;
