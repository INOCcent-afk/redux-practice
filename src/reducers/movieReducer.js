const initState = {
  movies: [
    {
      name: "Harry Potter",
      price: 10,
      id: 123,
    },
    {
      name: "Money Heist",
      price: 120,
      id: 12345,
    },
    {
      name: "Start Up",
      price: 23,
      id: 789,
    },
  ],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
      };
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
