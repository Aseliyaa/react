const DEFAULT_STATE = {
  albums: [],
  loading: false,
  error: null,
};

export default function albumsReducer(
  state = DEFAULT_STATE,
  { type, payload }
) {
  switch (type) {
    case "ALBUMS/FETCH/BEGIN":
      return { ...state, loading: true };
    case "ALBUMS/FETCH/SUCCESS":
      return { ...state, loading: false, error: null, albums: payload };
    case "ALBUMS/FETCH/ERROR":
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
