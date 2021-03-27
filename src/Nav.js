import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadMovies } from "./actions/moviesAction";

const Nav = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovies());
  }, [dispatch]);

  const { movies } = useSelector((state) => state.allMovies);
  return (
    <header>
      <h3>DAVE INOC</h3>
      <p>NUMBER OF ITEMS {movies.length}</p>
    </header>
  );
};

export default Nav;
