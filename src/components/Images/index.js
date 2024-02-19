import { forwardRef, useState } from 'react';
import classNames from 'classnames';

import images from '~/assets/images';
import styles from './Images.module.scss';

const Images = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleFallBackError = () => {
        setFallback(customFallback); // mặc định sẽ là noImage nếu không truyền fallback -> có truyền thì lấy fallback -> link k lỗi thì lấy src
    };

    return (
        <img
            className={classNames(className, styles.wrapper)}
            src={fallback || src}
            alt={alt}
            {...props}
            ref={ref}
            onError={handleFallBackError}
        />
    );
});

export default Images;
