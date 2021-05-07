import React from 'react';

const Nominations = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => <div>
                <p>{movie.Title} ({movie.Year})</p>
            </div>)}
        </>
    )
}

export default Nominations;