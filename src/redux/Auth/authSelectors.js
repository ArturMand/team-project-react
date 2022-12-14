export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectIsToken = state => state.auth.token;
export const selectIsSaveRoute = state => state.auth.isSaveRoute;
export const selectIsHomePage = state => state.auth.isHomePage;
export const selectUsername = state => state.auth.user.username;
export const selectUseBalance = state => state.auth.user.balance;
export const selectCurrentPage = state => state.auth.currentPage;
