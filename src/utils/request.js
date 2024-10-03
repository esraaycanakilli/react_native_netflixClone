import {axiosAgent} from '../libs/axios';

const responseBody = response => response.data;

export const requests = {
  get: (url, params = {}) => axiosAgent.get(url, params).then(responseBody),
};
  //yukardıdaki satırda cevabı dışarıda bir fonksiyondan çağırdık. Alttaki gibi de yazılabilir
  //get: (url, params = {}) => axiosAgent.get(url, params).then(response => response.data),
