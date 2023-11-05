import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Buttons from '~/components/Buttons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/86ce76ce4efec4f0f8bf1ee3793da03b~c5_100x100.jpeg?x-expires=1699066800&x-signature=hM%2B24b0YxbWbMVvQlEKow05JA1I%3D"
                    alt=""
                    className={cx('avartar')}
                ></img>
                <div>
                    <Buttons primary className={cx('btn-follow')}>
                        Follow
                    </Buttons>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>28tech</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </p>
                <p className={cx('name')}>28 Tech</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>6.1M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
