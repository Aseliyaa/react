export const FetchUser = (id) => async (dispatch, state, api) => {
  dispatch({ type: "USER/FETCH/BEGIN" });
  try {
    const user = await api.getUser(id);
    const albums = await api.getAlbumsForUser(id);
    dispatch({ type: "USER/FETCH/SUCCESS", payload: { user, albums } });
  } catch (e) {
    console.error(e);
    dispatch({ type: "USER/FETCH/ERROR", payload: e.message });
  }
};
