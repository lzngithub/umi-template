import { request } from 'umi';

export async function getUserInfo(token: string) {
  return request('/api/user/info', {
    method: 'POST',
    headers: {
      // token,
    },
  });
}

export function login(data: any, options?: any) {
  return request('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
    ...(options || {}),
  });
}
