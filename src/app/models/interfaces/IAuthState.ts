import { IAuthData } from "./IAuthData";

export interface IAuthState {
  isAuthenticated: boolean;
  authData: IAuthData | null;
  errorMessage: string ;
}
