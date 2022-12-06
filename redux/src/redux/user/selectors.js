const getData = (state) => state.user.user;

export const selectUser = (state) => getData(state)?.user;
export const selectAlbums = (state) => getData(state)?.albums;
export const selectLoading = (state) => state.user.loading;
export const selectError = (state) => state.user.error;
