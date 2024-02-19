import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Images from '../Images';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Images
                className={cx('userAvatar')}
                src="https://i.pinimg.com/736x/07/e9/79/07e979928cae556d87c2e6e7d94b100c.jpg"
                alt="MCK"
            />
            <div className={cx('info')}>
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
