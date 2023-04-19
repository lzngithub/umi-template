import { RequestConfig } from 'umi';
import { getUserInfo } from '@/utils/authority';
import { history } from 'umi';
import { mapData } from '@/utils/index';
import { getUser } from '@/services/user';
import {
  BasicLayoutProps,
  Settings as LayoutSettings,
} from '@ant-design/pro-layout';
import { Header } from '@/components/header';
import { RightContent } from '@/components/rightContent';
import Footer from '@/components/footer';

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
      if (process.env.NODE_ENV === 'production') {
        const replaceurl = url.replace('/apis/', '/');
        newUrl = process.env.API_URL + replaceurl;
      }

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
  if (['/login', '/'].includes(history.location.pathname)) return {}; // 首页、登陆页不需要去请求用户信息
  console.log(history.location.pathname);
  const { body: userInfo } = await getUser();
  userInfo.permission = mapData(userInfo.permissionItemList, {});
  return userInfo;
}

export function render(oldRender: () => void) {
  console.log(getUserInfo());
  if (!getUserInfo()) {
    // 本地没有存有用户信息则直接跳转到登录页
    history.push('/login');
  }
  return oldRender();
}

export const layout = ({
  initialState,
}: {
  initialState: { settings?: LayoutSettings };
}): BasicLayoutProps => {
  const contentStyle = {
    height: 'calc(100vh - 70px)',
  };
  return {
    contentStyle,
    rightContentRender: () => <RightContent />,
    menuHeaderRender: () => <Header></Header>,
    footerRender: () => <Footer />,
  };
};
