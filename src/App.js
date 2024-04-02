import { useState, useEffect } from "react";

import MovieCard from "./components/MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

function App() {
  const [movies, setMovies] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    const movies = data.Search;
    setMovies(movies);
  };

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  const searchMovieHandler = () => {
    searchMovies(searchItem);
  };

  return (
    <div className="app">
      <h1>Search Movie</h1>

      <div className="search">
        <input
          placeholder="Search for a movie"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        />
        <img src={SearchIcon} alt="Search" onClick={searchMovieHandler} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                Year={movie.Year}
                Title={movie.Title}
                Poster={movie.Poster}
                Type={movie.Type}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
