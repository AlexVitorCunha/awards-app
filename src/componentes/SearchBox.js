import React from 'react';

const SearchBox = (props) => {
    return (
        <div>
            <input 
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='Type Movie Title'
            ></input>
        </div>
    )
}

export default SearchBox;