export const addMovie = (name, price) => {
  return {
    type: "ADD_MOVIE",
    payload: {
      name: name,
      price: price,
      id: Math.ceil(Math.random() * 100),
    },
  };
};
