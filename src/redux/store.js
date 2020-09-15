import { createStore, applyMiddleware } from "redux"
import { persistStore } from "redux-persist"
import logger from "redux-logger"
import thunk from "redux-thunk"

import rootReducer from "./rootReducer"

const milddlewares = [thunk]

if (process.env.NODE_ENV === "development") milddlewares.push(logger)

const store = createStore(rootReducer, applyMiddleware(...milddlewares))

const persistor = persistStore(store)

export { store, persistor }
