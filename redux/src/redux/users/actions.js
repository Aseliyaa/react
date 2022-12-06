export const FetchUsers = () => async (dispatch, state, api) => {
  dispatch({ type: "USERS/FETCH/BEGIN" });
  try {
    const users = await api.getUsers();
    dispatch({ type: "USERS/FETCH/SUCCESS", payload: users });
  } catch (e) {
    console.error(e);
    dispatch({ type: "USERS/FETCH/ERROR", payload: e });
  }
};
