import React from "react";
import { useDispatch } from "react-redux";
import { removeMovie } from "./actions/removeMovieAction";

const Movie = ({ name, price, id }) => {
  const dispatch = useDispatch();

  const deleteMovie = () => {
    dispatch(removeMovie(id));
  };

  return (
    <div>
      <h3>{name}</h3>
      <p> {price} </p>
      <button onClick={deleteMovie}>REMOVE</button>
    </div>
  );
};

export default Movie;
