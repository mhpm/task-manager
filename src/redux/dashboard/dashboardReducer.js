import DATA from "./data"

const INITIAL_STATE = {
  data: DATA,
  card: null,
}

const dashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
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
