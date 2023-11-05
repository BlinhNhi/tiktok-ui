// Component này dành cho việc thay đổi btn
// thư viện PropTypes
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Buttons.module.scss';
//  Dùng cho case sự kiện chuyển hướng trong cùng link nội bộ
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
// nhận props vào
function Buttons({
    children,
    to,
    href,
    primary = false,
    outline = false,
    rounded = false,
    // Mặc định btn ko thay đổi là true.
    text = false,
    disabled,
    small = false,
    large = false,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    // componentn mặc định sẽ là button
    let Comp = 'button';

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        // xử lý những sự kiện bắt đầu từ chữ on sẽ bị remove event listener btn is disabled
        Object.keys(props).forEach(function (key) {
            // console.log(key);
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // có nhiều class khác nhau
    // [className]: className : Tạo một thuộc tính mới cho object với tên là className,
    // nhưng giá trị của thuộc tính này là một mảng chứa một phần tử duy nhất là className.
    const classes = cx('wrapper', { primary, outline, rounded, text, disabled, [className]: className, small, large });

    // classes : những className ,  props : những thẻ link , href , target . Thuộc tính liên kết của thẻ a ... ,
    //children là componet children
    //
    return (
        <Comp className={classes} {...props}>
            {/* icon */}
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {/* text */}
            <span className={cx('title')}>{children}</span>

            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Buttons.propTypes = {
    // nếu children chúng ta truyền function hay những thứ k hợp lệ , bắt buộc truyền vào
    // 1 value chứ k để rỗng (undefined) thì báo lỗi
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Buttons;
