import { SET_IS_LOADING, SET_ERROR, SET_USER } from './actions'

const initialState = {}
const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_IS_LOADING:
         return {
            ...state,
            isLoading: action.payload
         }
      case SET_ERROR:
         return {
            ...state,
            error: action.payload
         }
      case SET_USER:
         return {
            ...state,
            user: action.payload
         }
      default:
         return state
   }
}
export default authReducer