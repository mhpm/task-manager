import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import dashboardReducer from "./dashboard/dashboardReducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["dashboard"],
}

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
})

export default persistReducer(persistConfig, rootReducer)
