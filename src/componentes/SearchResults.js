import React from 'react';

const SearchResults = (props) => {
    return (
        <ul>
            <h3>Results for "{props.currentSearch}"</h3>
            {props.movies.map((movie, index) => (<li>
                <p>{movie.Title} ({movie.Year})</p>
                <button className="add-nomination" onClick={() => props.handleNominationsClick(movie)}>Nominate</button>
            </li>))}
        </ul>
    )
}

export default SearchResults;