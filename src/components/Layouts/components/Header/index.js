import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faLanguage,
    faMoon,
    faGear,
    faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import styles from './Header.module.scss';
import images from '~/assets/images';
import routesConfig from '~/configRoutes/routes';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { faBookmark, faCircleQuestion, faKeyboard, faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import { MessageIcon, NotificationIcon } from '~/components/Icons';
import Images from '~/components/Images';
import Search from '~/components/Search'
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Trung tâm Nhà sáng tạo LIVE',
        link: 'https://www.tiktok.com/live/creators/vi-VN/?enter_from=more&lang=vi-VN&region=VN',
    },
    {
        icon: <FontAwesomeIcon icon={faLanguage} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        link: '/feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Phím tắt trên bàn phím',
    },

    {
        icon: <FontAwesomeIcon icon={faMoon} />,
        title: 'Chế độ tối',
    },
];

const CURRENT_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'Xem hồ sơ',
        link: '/profile',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Yêu thích',
        link: '/profile',
    },

    {
        icon: <FontAwesomeIcon icon={faBitcoin} />,
        title: 'LIVE Studio',
        link: 'https://www.tiktok.com/studio/download?enter_from=profile',
    },

    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Cài đặt',
        link: '/setting',
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Phản hồi và trợ giúp',
        link: '/feedback',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
        link: '/home',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    //Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
                throw new Error('Invalid type');
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok"></img>
                </Link>


                <Search />

                <div className={cx('actions')}>
                    <Button className={cx('iconBtn')} leftIcon={<FontAwesomeIcon icon={faPlus} />} target="_blank">
                        Tải lên
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Tin nhắn" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Hộp thư">
                                <button className={cx('actions-btn')}>
                                    <NotificationIcon />
                                    <sup className={cx('supBadge')}>17</sup>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary target="_blank">
                                Đăng nhập
                            </Button>
                        </>
                    )}

                    <Menu items={CURRENT_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Images
                                src="https://i.pinimg.com/564x/3e/46/61/3e4661317a1ea9d4fdddcb48712d21f2.jpg"
                                alt="Nguyễn Thành Long"
                                className={cx('user-avatar')}
                                fallback="https://i.pinimg.com/564x/44/0f/13/440f137616e360f94ad235246205c8ae.jpg"
                            />
                        ) : (
                            <button className={cx('more-icon')}>{<FontAwesomeIcon icon={faEllipsisVertical} />}</button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
