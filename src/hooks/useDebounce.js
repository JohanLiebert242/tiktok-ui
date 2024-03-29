import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//Custom useDebounce Hook
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handlerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handlerId);
    }, [value, delay]);

    return debouncedValue;

    // Mỗi khi deps thay đổi thì hàm cleanup function sẽ được gọi trước vì thế giá trị sẽ là "" cho tới khi user ngừng nhập thì sẽ mới gọi được setTimeout
}

useDebounce.propTypes = {
    value: PropTypes.string,
    delay: PropTypes.number
}

export default useDebounce;
