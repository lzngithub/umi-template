export const setUserInfo = (info: any) => {
  localStorage.setItem('userInfo', JSON.stringify(info));
};

export const getUserInfo = () => {
  let userInfo = localStorage.getItem('userInfo');
  if (!userInfo) return userInfo;
  return JSON.parse(userInfo);
};

export const clearUserInfo = () => {
  localStorage.removeItem('userInfo');
};

// 判断是否有权限
export const isAccess = (key: string) => {
  const permission = getUserInfo()?.permission;
  return permission[key];
};
