
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IAuthData } from "src/app/models/interfaces/IAuthData";
import { IAuthState } from "src/app/models/interfaces/IAuthState";
import { authNode } from "./auth.reducer";

export const selectAuthFeature = createFeatureSelector<IAuthState>(authNode);

export const selectAuthErrorMsg = createSelector(
  selectAuthFeature,
  (state: IAuthState): string => state.errorMessage
);

export const selectIsAuthenticated = createSelector(
  selectAuthFeature,
  (state: IAuthState): boolean => state.isAuthenticated
);


export const selectAuthData = createSelector(
  selectAuthFeature,
  (state: IAuthState): IAuthData | null => state.authData
);



