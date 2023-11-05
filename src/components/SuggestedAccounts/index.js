import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
const cx = classNames.bind(styles);

function SuggestedAcounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem></AccountItem>
            {/* <AccountItem></AccountItem>
            <AccountItem></AccountItem> */}

            <p className={cx('more-btn')}>See All</p>
        </div>
    );
}

SuggestedAcounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAcounts;
