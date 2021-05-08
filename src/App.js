import React, { useState, useEffect } from "react";
import "./App.css";
import Nominations from "./components/Nominations";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [nominations, setNominations] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=e116be63&Type=movie`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieNominations = JSON.parse(
      localStorage.getItem("current-nominations")
    );
      if(movieNominations){
        setNominations(movieNominations);
      }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("current-nominations", JSON.stringify(items));
  };

  const addNomination = (movie) => {
    const newNominationList = [...nominations, movie];
    if (newNominationList.length <= 5) {
      setNominations(newNominationList);
      saveToLocalStorage(newNominationList);
    } else alert("Maximum amount of nominations reached");
  };

  const deleteNomination = (movie) => {
    const newNominationList = nominations.filter(
      (nomination) => nomination.imdbID !== movie.imdbID
    );

    setNominations(newNominationList);
    saveToLocalStorage(newNominationList);
  };

  return (
    <div id="main">
      <h1>The Shoppies</h1>
      <section>
        <h2>Movie Title Search</h2>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </section>
      <section>
        <div>
          <SearchResults
            movies={movies}
            nominations={nominations}
            currentSearch={searchValue}
            handleNominationsClick={addNomination}
          />
        </div>
        <div>
          <Nominations
            movies={nominations}
            currentSearch={searchValue}
            handleNominationsClick={deleteNomination}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
