import { RequestConfig } from 'umi';
import { getUserInfo } from '@/utils/authority';
import { history } from 'umi';
import { mapData } from '@/utils/index';
import { getUser } from '@/services/user';

export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {
    adaptor: (resData) => ({
      ...resData,
      success: resData.header?.code === 200,
      errorMessage: resData.header?.message,
    }),
  },
  requestInterceptors: [
    (url, options) => {
      let newUrl = url;
      const newOptions = { ...options };
      const token = getUserInfo()?.token;
      newOptions.headers = { ...(newOptions.headers || {}), token };
      newOptions.credentials = 'omit';
      return {
        url: newUrl,
        options: newOptions,
      };
    },
  ],
  responseInterceptors: [
    async (response) => {
      const data = await response.clone().json();
      const { header } = data;
      if ([401, '401', 403, '403'].includes(header.code)) {
        history.push('/login');
      }
      return data;
    },
  ],
};

export async function getInitialState() {
  if (history.location.pathname === '/login') return null; // 登陆页不需要去请求用户信息
  const userInfo = await getUser();
  userInfo.permission = mapData(userInfo.permissionItemList, {});
  return userInfo;
}

export function render(oldRender: () => void) {
  if (!getUserInfo()) {
    // 本地没有存有用户信息则直接跳转到登录页
    history.push('/login');
  }
  return oldRender();
}
