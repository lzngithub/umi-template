import { IRouteComponentProps } from 'umi';
import { useMemo } from 'react';
import styles from './index.less';
import type { MenuProps } from 'antd';
import { Menu, Layout } from 'antd';

const { Content, Sider } = Layout;

export default function (props: IRouteComponentProps) {
  const { children, route, location, history } = props;
  console.log(props);
  const onClick: MenuProps['onClick'] = (e) => {
    history.push(e.key);
    console.log('click ', e);
  };
  const items = useMemo(() => {
    if (!route.routes) return undefined;
    let currentRoute = location.pathname;
    let currentObj = route.routes.find((item: any) =>
      currentRoute.includes(item.path),
    );
    if (!currentObj || !currentObj.routes) return undefined;
    return currentObj.routes.map((item) => {
      let obj: any = {};
      obj.label = item.name;
      obj.key = item.path;
      return obj;
    });
  }, [location, route]);
  console.log(items);
  return (
    <Layout>
      {items && (
        <Sider className={styles.sider} theme="light">
          <Menu onClick={onClick} mode="inline" items={items} />
        </Sider>
      )}
      <Content>{children}</Content>
    </Layout>
  );
}
