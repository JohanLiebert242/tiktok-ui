import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/configRoutes';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    ActiveHomeIcon,
    UserGroupIcon,
    ActiveUserGroupIcon,
    CompassIcon,
    ActiveCompassIcon,
    LiveIcon,
    ActiveLiveIcon,
} from '~/components/Icons';
import Images from '~/components/Images';
import FollowingAccount from '~/components/FollowingAccount';

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = true;
    return (
        <div className={cx('wrapper')}>
            <aside className={cx('sidebar')}>
                <Menu>
                    <MenuItem
                        to={config.routes.home}
                        title="Dành cho bạn"
                        icon={<HomeIcon />}
                        activeIcon={<ActiveHomeIcon />}
                    />
                    <MenuItem
                        to={config.routes.following}
                        title="Đang follow"
                        icon={<UserGroupIcon />}
                        activeIcon={<ActiveUserGroupIcon />}
                    />
                    <MenuItem
                        to={config.routes.friends}
                        title="Bạn bè"
                        icon={<UserGroupIcon />}
                        activeIcon={<ActiveUserGroupIcon />}
                    />
                    <MenuItem
                        to={config.routes.explore}
                        title="Khám phá"
                        icon={<CompassIcon />}
                        activeIcon={<ActiveCompassIcon />}
                    />
                    <MenuItem
                        to={config.routes.live}
                        title="LIVE"
                        icon={<LiveIcon />}
                        activeIcon={<ActiveLiveIcon />}
                    />
                    <MenuItem
                        to={config.routes.profile}
                        title="Hồ sơ"
                        icon={
                            currentUser ? (
                                <Images
                                    src="https://i.pinimg.com/564x/3e/46/61/3e4661317a1ea9d4fdddcb48712d21f2.jpg"
                                    alt="Nguyễn Thành Long"
                                    className={cx('user-avatar')}
                                    fallback="https://i.pinimg.com/564x/44/0f/13/440f137616e360f94ad235246205c8ae.jpg"
                                />
                            ) : (
                                <UserGroupIcon />
                            )
                        }
                    />
                </Menu>
                <FollowingAccount currentUser={currentUser} label="Các tài khoản đang follow" />
            </aside>
        </div>
    );
}

export default Sidebar;
