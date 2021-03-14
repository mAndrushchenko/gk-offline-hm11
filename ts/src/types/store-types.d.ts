import { rootReducer, store } from "../store"

export type TReducer = ReturnType<typeof rootReducer>

export type TAppDispatch = typeof store.dispatch