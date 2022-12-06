const getData = (state) => state.album.album;

export const selectUser = (state) => getData(state)?.user;
export const selectPhotos = (state) => getData(state)?.photos;
export const selectAlbum = (state) => getData(state)?.album;
export const selectLoading = (state) => state.album.loading;
export const selectError = (state) => state.album.error;
