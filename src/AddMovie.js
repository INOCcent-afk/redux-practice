import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "./actions/addMovieAction";

const AddMovie = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const AddMovie = (e) => {
    e.preventDefault();
    dispatch(addMovie(name, price));
  };

  return (
    <form onSubmit={AddMovie}>
      <input
        type="text"
        name="name"
        required
        value={name}
        onChange={changeName}
      />
      <input
        type="text"
        name="price"
        required
        value={price}
        onChange={changePrice}
      />
      <button>SUBMIT</button>
    </form>
  );
};

export default AddMovie;
