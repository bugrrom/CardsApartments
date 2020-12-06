import { ADD_ALL_APARTMENTS, apartmentsTypes } from "./types";

const initialState = {
  allApartments: [],
};

type typeState = {
  allApartments: any[];
};

export const apartmentReducer = (
  state: typeState = initialState,
  action: apartmentsTypes
) => {
  switch (action.type) {
    case ADD_ALL_APARTMENTS:
      return {
        ...state,
        allApartments: action.payload,
      };
    default:
      return state;
  }
};
