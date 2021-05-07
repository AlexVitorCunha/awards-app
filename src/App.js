import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nominations from './componentes/Nominations';

const App = () => {
  const [movies, setMovies] = useState([
    {
            "Title": "In the Name of the Father",
            "Year": "1993"
        },
        {
            "Title": "Father of the Bride",
            "Year": "1991"
        },
        {
            "Title": "Father of the Bride Part II",
            "Year": "1995"
        },
        {
            "Title": "The Father",
            "Year": "2020"
        },
        {
            "Title": "My Father the Hero",
            "Year": "1994"
        },
        {
            "Title": "Father of the Year",
            "Year": "2018"
        },
        {
            "Title": "Father of the Bride",
            "Year": "1950"
        },
        {
            "Title": "The Great Father",
            "Year": "2017"
        },
        {
            "Title": "Dragon Ball Z: Bardock - The Father of Goku",
            "Year": "1990"
        },
        {
            "Title": "The Courtship of Eddie's Father",
            "Year": "1963"
        }
  ]);
  return (
  <div>
    <Nominations movies = {movies} />
  </div>)
  ;
};

export default App;
