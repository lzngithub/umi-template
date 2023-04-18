type Access = {
  code: string;
  canAccess: boolean;
  permissionItemList: null | Access[];
};

type mapAccess = {
  [otherName: string]: boolean;
};

export const mapData = function (data: Access[], obj: mapAccess) {
  if (data.length === 0) return {};
  data.forEach((item: Access) => {
    obj[item.code] = item.canAccess;
    if (item.permissionItemList) {
      mapData(item.permissionItemList, obj);
    }
  });
  return obj;
};
