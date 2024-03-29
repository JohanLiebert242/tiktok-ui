import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Images from '../Images';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link onClick={onClick} to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Images className={cx('userAvatar')} src={data.avatar} alt={data.full_name} />
            <div className={cx('info')}>
                <h4 className={cx('user')}>
                    <p className={cx('nickName')}>{data.full_name}</p>
                    {data.tick && <FontAwesomeIcon className={cx('checkIcon')} icon={faCircleCheck} />}
                </h4>
                <p className={cx('name')}>{data.nickname}</p>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default AccountItem;
