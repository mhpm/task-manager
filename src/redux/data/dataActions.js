import DataActionTypes from "./dataTypes"

const updateDataStart = () => ({
  type: DataActionTypes.UPDATE_DATA_START,
})

const updateDataSuccess = (data) => ({
  type: DataActionTypes.UPDATE_DATA_SUCCESS,
  payload: data,
})

const updateDataFailure = (errorMessage) => ({
  type: DataActionTypes.UPDATE_DATA_FAILURE,
  payload: errorMessage,
})

export const updateDataStartAsync = (data) => {
  return (dispatch) => {
    dispatch(updateDataStart())

    try {
      dispatch(updateDataSuccess(data))
    } catch (error) {
      dispatch(updateDataFailure(error.message))
    }
  }
}

export const setCard = (card) => ({
  type: "SET_CARD",
  payload: card,
})
