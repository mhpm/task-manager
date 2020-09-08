import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import { persistStore } from "redux-persist"

import rootReducer from "./rootReducer"

const milddlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...milddlewares))

const persistor = persistStore(store)

export { store, persistor }
