import { METHODS, URLS } from '../consts';
import { axiosWrapper } from '../AxiosWrapper';

import { IData } from '../../types';

export const requestData = async (): Promise<IData[]> => {
  const url = URLS.PRODUCTS;
  const { data } = await axiosWrapper<null, null, null>({
    method: METHODS.GET,
    url,
  });
  return data;
};
