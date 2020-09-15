import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import dataReducer from "./data/dataReducer"

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cardList"],
}

const rootReducer = combineReducers({
  cardList: dataReducer,
})

export default persistReducer(persistConfig, rootReducer)
