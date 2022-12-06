export const FetchAlbums = () => async (dispatch, state, api) => {
  dispatch({ type: "ALBUMS/FETCH/BEGIN" });
  try {
    const albums = await api.getAlbums();
    dispatch({ type: "ALBUMS/FETCH/SUCCESS", payload: albums });
  } catch (e) {
    console.error(e);
    dispatch({ type: "ALBUMS/FETCH/ERROR", payload: e });
  }
};
