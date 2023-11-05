import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
// xử lý sự việc k truyền prop onChange bên header sẽ mặc định là undefined gây ra lỗi
// khi truyền hàm rỗng vào như v sẽ k gây ra lỗi
const defaultFn = () => {};
// children = MenuItem
// hideOnClick truyền qua prop Menu để sau này khi dùng lại Menu item ta có thể chuyển đổi nó ẩn hiện linh hoạt.
function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    // ban đầu items sẽ nhận MENU_ITEMS là 1 mảng chứa các Object nên useState ta set là 1 mảng chứa items
    // {} : là đại diện của trang hiện tại
    // chúng ta thêm object bọc ngoài mảng để sau này dễ thay đổi data chuyển thành nhiều cấp
    // console.log(items);
    const [history, setHistory] = useState([{ data: items }]);
    // Lúc nào cũng lấy phần tử cuối mảng để trả về
    const current = history[history.length - 1];
    // current là phần tử cuối mảng : { data: items }
    // . data là .data lấy items
    const renderItems = () => {
        return current.data.map((item, index) => {
            //  Xử lý trong item nào có children
            // covert sang boolean để ktra ob nào có children và ob nào là undefined
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            // dùng toán tử spread để giữ phần tử của mảng cũ lại
                            // sau  đó rải phần tử của mảng ms vào
                            // pre icon back và Languages
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        // lúc nào current cũng lấy ra phần tử cuối nên chỉ cần xoá phần tử cuối đi sẽ back lại đc
        setHistory((pre) => pre.slice(0, pre.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('content')} tabIndex="-1" {...attrs}>
            <ProperWrapper className={cx('menu-popper')}>
                {/*  
                    nếu history.length > 1 sẽ hiện ra header
                */}
                {history.length > 1 && <Header title={current.title} onBack={handleBack}></Header>}

                <div className={cx('menu-scrollbale')}>{renderItems()}</div>
            </ProperWrapper>
        </div>
    );

    const handleResetToFristPage = () => {
        setHistory((pre) => pre.slice(0, 1));
    };

    return (
        <Tippy
            // tắt bỏ hành động onClick ẩn menu
            hideOnClick={hideOnClick}
            // canh chỉnh padding , vị trí
            offset={[12, 8]}
            // visible
            // có thể tương tác vào kết quả .
            interactive
            // visible
            delay={[0, 1000]}
            placement="bottom-end"
            // render ra kết quả tìm kiếm
            render={renderResult}
            // Khi ẩn trả về mảng 1
            onHide={handleResetToFristPage}
        >
            {/* icon more-btn */}
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.func,
};
export default Menu;
