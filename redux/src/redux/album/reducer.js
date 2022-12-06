const DEFAULT_STATE = {
  album: [],
  loading: false,
  error: null,
};

export default function albumReducer(state = DEFAULT_STATE, { type, payload }) {
  switch (type) {
    case "ALBUM/FETCH/BEGIN":
      return { ...state, loading: true };
    case "ALBUM/FETCH/SUCCESS":
      return { ...state, loading: false, error: null, album: payload };
    case "ALBUM/FETCH/ERROR":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
