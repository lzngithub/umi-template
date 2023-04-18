export default function (initialState: any) {
  const { permission } = initialState;
  return {
    ...permission,
    needAccess: true,
  };
}
