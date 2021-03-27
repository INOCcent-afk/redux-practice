import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "./actions/moviesAction";
import Movie from "./Movie";
import Nav from "./Nav";
import AddMovie from "./AddMovie";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const { movies } = useSelector((state) => state.allMovies);

  return (
    <div className="App">
      <Nav />
      <AddMovie />
      {movies.map((movie) => (
        <Movie
          name={movie.name}
          price={movie.price}
          key={movie.id}
          id={movie.id}
        />
      ))}
    </div>
  );
}

export default App;
