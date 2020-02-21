import { FETCH_USER } from "./types";
import { getCurrentUser } from '../api/session';

export const fetchUser = () => async dispatch => {
  const user = await getCurrentUser();
  dispatch({ type: FETCH_USER, payload: user });
};