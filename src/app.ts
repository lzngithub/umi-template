import { RequestConfig } from 'umi';
import { getUserInfo } from '@/utils/authority';

export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {
    adaptor: (resData) => ({
      ...resData,
      success: resData.header.code === 200,
      errorMessage: resData.header.message,
    }),
  },
  // requestInterceptors: [
  //   (url, options) => {
  //     let newUrl = url;
  //     const newOptions = { ...options };
  //     const token = '';
  //     newOptions.headers = { ...(newOptions.headers || {}), token };
  //     return {
  //       url: newUrl,
  //       options: newOptions,
  //     };
  //   },
  // ],
  // responseInterceptors: [
  //   async (response) => {
  //     const data = await response.clone().json();
  //     const { header, body } = data;

  //     // 测试临时使用，之后要删掉
  //     if (!header) {
  //       return data;
  //     }

  //     if (header.code === '200' || header.code === 200) {
  //       return body;
  //     }

  //     if (header.code === '401' || header.code === 401) {
  //       return;
  //     }
  //     const { message } = header;
  //     const error = new Error();
  //     error.name = 'customError';
  //     error.message = message;
  //     throw error;
  //   },
  // ],
};

// src/app.ts
export async function getInitialState() {
  const userInfo = getUserInfo();
  console.log(userInfo);
  return userInfo;
}
