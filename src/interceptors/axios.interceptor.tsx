import axios, { AxiosRequestConfig } from 'axios';
import { getInLocalStorage, getValidationError, LocalStorageKeys, saveInLocalStorage } from '../utilities';
import { SnackbarUtilities } from '../utilities/snackbar-manager';

export const AxiosInterceptor = () => {
  saveInLocalStorage(LocalStorageKeys.TOKEN, '123123123123');

  const updateHeader = (request: AxiosRequestConfig) => {
    const token = getInLocalStorage(LocalStorageKeys.TOKEN);
    const newHeaders = {
      Authorization: token,
      'Content-Type': 'application/json'
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request) => {
    if (request.url?.includes('assets')) return request;
    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      console.log('response', response);
      SnackbarUtilities.success('Success');
      return response;
    },
    (error) => {
      SnackbarUtilities.error(getValidationError(error.code));
      return Promise.reject(error);
    }
  );
};
