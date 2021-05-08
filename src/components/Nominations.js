import React from 'react';

const Nominations = (props) => {
    if(props.movies){
        return (
        <>
        <h3>Nominations</h3>
        <ul>
            {props.movies.map((movie, index) => (<li>
                <p>{movie.Title} ({movie.Year})</p>
                <button className="delete-nomination" onClick={() => props.handleNominationsClick(movie)}>Delete</button>
            </li>))}
        </ul>
        </>
    )
    }
    return(
        <>
        <h3>Nominations</h3>
        </>  
    )
}

export default Nominations;