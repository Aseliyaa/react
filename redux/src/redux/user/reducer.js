const DEFAULT_STATE = {
  user: [],
  loading: false,
  error: null,
};

export default function userReducer(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case "USER/FETCH/BEGIN":
      return { ...state, loading: true };
    case "USER/FETCH/SUCCESS":
      return { ...state, loading: false, error: null, user: payload };
    case "USER/FETCH/ERROR":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
