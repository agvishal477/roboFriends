import React from 'react';

const SearchBox = ({searchChange}) => {
    return(
        <div className='ps2'>
            <input 
                type='search'
                className='ps2'
                placeholder='search robo'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;