const DEFAULT_STATE = {
  users: [],
  loading: false,
  error: null,
};

export default function usersReducer(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case "USERS/FETCH/BEGIN":
      return { ...state, loading: true };
    case "USERS/FETCH/SUCCESS":
      return { ...state, loading: false, error: null, users: payload };
    case "USERS/FETCH/ERROR":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
