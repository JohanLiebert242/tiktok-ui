import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import Images from '~/components/Images';

const cx = classNames.bind(styles);

function AccountItem({ src, alt, nickname, name }) {

    return (
        <>
            <div className={cx('account-item')}>
                <Images className={cx('avatar')} src={src} alt={alt} />
                <div className="user-info">
                    <span className={cx('nickname')}>
                        <strong>{nickname}</strong>
                    </span>
                    <p className={cx('name')}>{name}</p>
                </div>
            </div>
        </>
    );
}

export default AccountItem;
