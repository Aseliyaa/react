export const FetchAlbum = (id) => async (dispatch, state, api) => {
  dispatch({ type: "ALBUM/FETCH/BEGIN" });
  try {
    const album = await api.getAlbum(id);
    const photos = await api.getPhotos(id);
    const user = await api.getUser(album.userId);
    console.log('f', album)
    dispatch({ type: "ALBUM/FETCH/SUCCESS", payload: { album, photos, user } });
  } catch (e) {
    dispatch({ type: "ALBUM/FETCH/ERROR", payload: e.message });
  }
};
