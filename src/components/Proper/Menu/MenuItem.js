import PropTypes from 'prop-types';
import Buttons from '~/components/Buttons';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    console.log(data);
    console.log(data.title);
    // const buttons = data.map((item) => (
    //     <Buttons key={item.id} leftIcon={data.icon}>
    //         {item.title}
    //     </Buttons>
    // ));
    // return buttons;

    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Buttons className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Buttons>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
