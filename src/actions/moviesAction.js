export const loadMovies = () => async (dispatch) => {
  dispatch({
    type: "GET_MOVIES",
  });
};
