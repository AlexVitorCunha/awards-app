import React from 'react';

const SearchResults = (props) => {
    if(props.nominations){
    return (
        <>
        <h3>Results for "{props.currentSearch}"</h3>
        <ul id="result-list"> 
            {props.movies.map((movie, index) => (<li>
                <p>{movie.Title} ({movie.Year})</p>
                <button disabled={ 
                    props.nominations.some((nomination) => nomination.imdbID == movie.imdbID)
                } className="add-nomination" onClick={() => props.handleNominationsClick(movie)}>Nominate</button>
            </li>))}
        </ul>
        </>
    )
    }
    return (
        <>
        <h3>Results for "{props.currentSearch}"</h3>
        <ul id="result-list"> 
            {props.movies.map((movie, index) => (<li>
                <p>{movie.Title} ({movie.Year})</p>
                <button className="add-nomination" onClick={() => props.handleNominationsClick(movie)}>Nominate</button>
            </li>))}
        </ul>
        </>
    )
}

export default SearchResults;