export default function (initialState: any) {
  if (initialState) {
    const { permission } = initialState;
    console.log(permission, 'permission');
    return {
      ...permission,
      needAccess: false,
    };
  }
}
