import { FETCH_USER } from "./types";
import { getCurrentUser } from '../api/session';
import { updateCredit } from '../api/billing';

export const fetchUser = () => async dispatch => {
  const user = await getCurrentUser();
  dispatch({ type: FETCH_USER, payload: user });
};

export const handleToken = (token) => async dispatch => {
  const user = await updateCredit(token);
  dispatch({ type: FETCH_USER, payload: user });
}