export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsToken = state => state.auth.token;

export const selectUsername = state => state.auth.user.username;