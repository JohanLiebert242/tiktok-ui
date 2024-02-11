import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('userAvatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/7330491752077492256~c5_100x100.jpeg?lk3s=30310797&x-expires=1707746400&x-signature=o2VtorkPfKI6Z7v%2Bk5Z9vtQVQTs%3D"
                alt="MCK"
            />
            <div class={cx('info')}>
                <h4 className={cx('user')}>
                    <p className={cx('nickName')}>mck</p>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCircleCheck} />
                </h4>
                <p className={cx('name')}>Nghiêm Vũ Thành Long</p>
            </div>
        </div>
    );
}

export default AccountItem;
