
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authNode, AuthState } from "./auth.reducer";

export const selectAuthFeature = createFeatureSelector<AuthState>(authNode);

export const selectAuthErrorMsg = createSelector(
  selectAuthFeature,
  (state: AuthState): string => state.errorMessage
);

export const selectIsAuthenticated = createSelector(
  selectAuthFeature,
  (state: AuthState): boolean => state.isAuthenticated
);



