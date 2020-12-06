import { combineReducers } from "redux";
import { apartmentReducer } from "../bus/apartmentsScreen/apartmentReducer";

export const rootReducer = combineReducers({
  apartment: apartmentReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
