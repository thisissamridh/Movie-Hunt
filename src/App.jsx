import React, { useState, useEffect } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import searchIcon from "./search.svg";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=ce110aaa";

const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState("");

  const searchmovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchmovies("avengers");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchmovies(searchTerm)}
        />

        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchmovies(searchTerm)}
        ></img>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return <MovieCard movies={movie} />;
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
