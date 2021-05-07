import React from 'react';

const Nominations = (props) => {
    return (
        <ul>
            <h3>Nominations</h3>
            {props.movies.map((movie, index) => (<li>
                <p>{movie.Title} ({movie.Year})</p>
                <button className="delete-nomination" onClick={() => props.handleNominationsClick(movie)}>Delete</button>
            </li>))}
        </ul>
    )
}

export default Nominations;