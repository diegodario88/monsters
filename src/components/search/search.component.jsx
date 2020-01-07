import React from 'react';

import './search.styles.css';

export const SearchComponent = ({ placeholder, handleChange }) => (

    <input className='search' type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)