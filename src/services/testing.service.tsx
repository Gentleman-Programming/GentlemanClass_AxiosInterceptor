import axios from "axios";
import { getInLocalStorage, LocalStorageKeys } from "../utilities";

export const testingService = () => {
  return axios.get("https://rickandmortyapi.com/api/character/2");
};

export const refreshToken = () => {
  return axios.post(
    "https://rickandmortyapi.com/api/refreshtoken",
    {},
    {
      headers: {
        Authorization: getInLocalStorage(LocalStorageKeys.REFRESH_TOKEN),
      },
    }
  );
};
