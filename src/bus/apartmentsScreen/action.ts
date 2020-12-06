import { Dispatch } from "redux";
import { ADD_ALL_APARTMENTS } from "./types";
const json = require("../../apartments.json")

export const addApartments = (payload: any) => {
  return {
    type: ADD_ALL_APARTMENTS,
    payload,
  };
};

export const fetchAllApartments = () => (dispatch: Dispatch) => {
  try {
    const data = JSON.parse(JSON.stringify(json));
    dispatch(addApartments(data.response));
  } catch (e) {}
};
