import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderReview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <ProperWrapper>
                    <AccountPreview></AccountPreview>
                </ProperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive delay={[800, 0]} render={renderReview} placement="bottom" offset={[-20, 0]}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/86ce76ce4efec4f0f8bf1ee3793da03b~c5_100x100.jpeg?x-expires=1699066800&x-signature=hM%2B24b0YxbWbMVvQlEKow05JA1I%3D"
                        alt=""
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>28tech</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                        </p>
                        <p className={cx('name')}>28 Tech</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
