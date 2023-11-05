import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/image';
import styles from './Image.module.scss';
console.log(images.noImage);

// fallback: customFallback = images.noImage :  đổi tên thành customFallback nếu có prop fallback thì lấy
// còn ko sẽ lấy no-image
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    // fallback || src : nếu có fallback thì lấy ko thì lấy src
    // ban đầu fallback là chuỗi rỗng ko lấy nếu set src lỗi sẽ call prop onError truyền hàm vào lấy ảnh noImage
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        ></img>
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
