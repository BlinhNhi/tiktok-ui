import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    // nhận value từ ngoài vào
    //value là giá trị tìm kiếm , delay là time delay tìm kiếm
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // đặt thời gian delay trước khi trả về kết quả
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        // sau khi trả về kết quả thì xoá Timeout đi tránh bị memory leak
        return () => clearTimeout(handler);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debouncedValue;
}

export default useDebounce;
