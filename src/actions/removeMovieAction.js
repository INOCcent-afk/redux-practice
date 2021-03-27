export const removeMovie = (id) => {
  return {
    type: "DELETE_MOVIE",
    payload: id,
  };
};
