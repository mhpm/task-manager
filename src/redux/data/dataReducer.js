import DATA from "./data"
import DataActionTypes from "./dataTypes"

const INITIAL_STATE = {
  data: DATA,
  card: null,
  isFetching: false,
  errorMessage: undefined,
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DataActionTypes.UPDATE_DATA_START:
      return {
        ...state,
        isFetching: true,
      }
    case DataActionTypes.UPDATE_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      }
    case DataActionTypes.UPDATE_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      }
    case "SET_CARD":
      return {
        ...state,
        card: action.payload,
      }
    default:
      return state
  }
}

export default dashboardReducer
