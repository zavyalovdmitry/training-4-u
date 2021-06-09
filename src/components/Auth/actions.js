import { Auth } from "../../API";

export const SET_IS_LOADING = "AUTH::SET_IS_LOADING"
export const SET_ERROR = "AUTH::SET_ERROR"
export const SET_USER = "AUTH::SET_USER"

export const setIsLoading = (payload) => ({ type: SET_IS_LOADING, payload })
export const setError = (payload) => ({ type: SET_ERROR, payload })
export const setUser = (payload) => ({ type: SET_USER, payload })

export const authorize = (auth) => async (dispatch) => {
   try {
      dispatch(setError(""))
      dispatch(setIsLoading(true))
      const user = await Auth.authorize(auth)
      await dispatch(setUser(user))
   } catch (error) {
      dispatch(setError(error))
   } finally {
      dispatch(setIsLoading(false))
   }
}