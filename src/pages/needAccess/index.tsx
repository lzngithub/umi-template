import { useAccess, Access } from 'umi';
export default function () {
  const access = useAccess();
  console.log(access);
  return <div>needAccess</div>;
}
