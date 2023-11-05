import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '../Image';
import classNames from 'classnames/bind';
import styles from './SearchAcountsItem.module.scss';

const cx = classNames.bind(styles);
function SearchAccountItem({ data }) {
    return (
        <Link to={`/:${data.nickname}`} className={cx('wrapper')}>
            <Image src={data.avatar} className={cx('avatar')} alt={data.avatar}></Image>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')}></FontAwesomeIcon>}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

// nếu truyền data khác kdl object thì báo lỗi cho dev bk
SearchAccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default SearchAccountItem;
