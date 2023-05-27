import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { cartSlice } from "./cart/cart.slice";
import { createPersistStorage } from "./createStorage";

const storage = createPersistStorage()
const persistConfig = {
    key: 'next-shop',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    // user: userSlice.reducer,
    cart: cartSlice.reducer,
    // carousel: carouselSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
