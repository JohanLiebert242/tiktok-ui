import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/configRoutes';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <aside className={cx('sidebar')}>
                <Menu>
                    <MenuItem to={config.routes.home} title="For You" icon={null}/>
                    <MenuItem to={config.routes.following} title="Following" icon={null}/>
                    <MenuItem to={config.routes.live} title="LIVE" icon={null}/>
                </Menu>
            </aside>
        </div>
    );
}

export default Sidebar;
