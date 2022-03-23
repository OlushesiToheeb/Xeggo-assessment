import React from 'react';

import styles from './Input.module.scss';

const Input = ({ id, type, name, value, placeholder, handleOnChange }) => (
    <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        value={value}
        onChange={handleOnChange}
    />
);

export default Input;
