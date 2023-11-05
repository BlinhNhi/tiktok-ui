import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { SearchIcon } from '~/components/Icons';

import * as request from '~/utils/request';
import { Wrapper as ProperWrapper } from '~/components/Proper';
import SearchAccountItem from '~/components/SearchAcoountsItem';
import { useDebounce } from '~/hooks';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Search() {
    // hiện ô kết quả nếu setSearchResult có kết quả > 1
    const [searchResult, setSearchResult] = useState([]);
    // tạo ra two way biding để tương tác data
    const [searchValue, setSearchValue] = useState('');
    // xét xem ô input có trả ra kết quả tìm kiếm hay bị blur ra ngoài k
    const [showResult, setShowResult] = useState(false);
    //
    const [loading, setLoading] = useState(false);

    // dùng useDebounced để delay kết quả tìm kiếm trước khi trả ra kết quả
    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        // lần đầu searchValue sẽ là null nhưng database sẽ trả kết quả tìm kiếm là q = ? sẽ gây ra bug
        // nên nếu ko có kq thì sẽ return
        if (!debouncedValue.trim()) {
            // nếu xoá hết value tìm kiếm thì mất ô hiển thị
            setSearchResult([]);
            return;
        }
        // trước khi call API  loading là true
        setLoading(true);
        // encodeURIComponent : mã hoá những kí tự hợp lệ @ & % khi nhập tìm kiếm

        request
            .get('users/search', {
                params: {
                    q: debouncedValue,
                    type: 'less',
                },
            })
            .then((res) => {
                setSearchResult(res.data);
                // sau khi gọi API
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
        // vì sao deps là debouncedValue : do searchValue thay đổi khi ng dùng nhập , và sẽ delay kết quả trc khi trả ra
    }, [debouncedValue]);

    const handleClear = () => {
        // two way binding
        // khi có click vào icon close search value sẽ trả ra chuỗi rỗng
        // focus ô input
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        // blur ra ngoài trả kết quả tìm kiếm là false , mất ô tìm kiếm
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        // xử lý dấu cách trc khi nhập
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };
    return (
        <div>
            <HeadlessTippy
                // có thể tương tác vào kết quả .
                interactive
                // ẩn ô kết quả tìm kiếm nếu nếu k có kq tìm kiếm và  có phần tử tìm kiếm < 0
                visible={showResult && searchResult.length > 0}
                // render ra kết quả tìm kiếm
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <ProperWrapper>
                            <h4 className={cx('search-title')}>Acounts</h4>
                            {/* nếu user nhập vào input có kết quả tìm kiếm thì sẽ trả kết quả ra  */}
                            {searchResult.map((result) => (
                                // nhận result vào prop data để truyền qua component SearchAccount Item
                                <SearchAccountItem key={result.id} data={result} />
                            ))}
                        </ProperWrapper>
                    </div>
                )}
                // nếu blur ra ngoài sẽ gọi hàm handleHideResult
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        // trả giá trị ng dùng nhập laị từ ô input
                        value={searchValue}
                        placeholder="Search Video and Acounts "
                        // kiểm tra chính tả
                        spellCheck="false"
                        // khi input thay đổi set từ chuổi rổng sang value đc nhập
                        onChange={handleChange}
                        // khi focus thì bật ô kết quả tìm kiếm
                        onFocus={() => setShowResult(true)}
                    ></input>
                    {/* khi có search value ng dùng nhập thì hiện icon close*/}
                    {!!searchValue && !loading && (
                        // Khi onClick trả về chuỗi rổng và focus vào ô input
                        <button className={cx('search-clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* API đang load sẽ hiện ra icon load */}
                    {loading && <FontAwesomeIcon icon={faSpinner} className={cx('search-loading')} />}

                    <button className={cx('search-button')} onMouseDown={handleSubmit}>
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
