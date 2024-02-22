import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import AccountItem from '~/components/FollowingAccount/AccountItem';
import Button from '../Button';

const cx = classNames.bind(styles);

function FollowingAccount({ label, currentUser }) {
    return (
        <div className={cx('wrapper')}>
            {currentUser ? (
                <>
                    <p className={cx('label')}>{label}</p>
                    <AccountItem
                        alt="nickname"
                        nickname="ズオン聞"
                        name="johan.24?"
                        src="https://i.pinimg.com/736x/87/89/14/878914877f2ed58d54ce543dd4972d55.jpg"
                    />
                    <AccountItem
                        alt="nickname"
                        nickname="达广告"
                        name="nnvdS?1s"
                        src="https://i.pinimg.com/736x/3c/a3/f0/3ca3f02e1ec3a6d2d30a6558b97add06.jpg"
                    />
                    <AccountItem
                        alt="nickname"
                        nickname="시험"
                        name="shawti><"
                        src="https://i.pinimg.com/736x/50/fe/cc/50fecc2e953e70a4d3dad86de09fc877.jpg"
                    />
                    <button className={cx('view-more')}>Xem thêm</button>
                </>
            ) : (
                
                   <div class="reminder-wrapper">
                        <p className={cx('login-reminder')}>
                            Đăng nhập để follow các tác giả, thích video và xem bình luận.
                        </p>
                        <Button rounded className={cx('login-btn')} outline>
                            Đăng nhập
                        </Button>
                   </div>
                
            )}
        </div>
    );
}

FollowingAccount.propTypes = {
    label: PropTypes.string,
};

export default FollowingAccount;
