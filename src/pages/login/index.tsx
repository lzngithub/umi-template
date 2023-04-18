import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { login } from '@/services/user';
import { setUserInfo } from '@/utils/authority';
import { useRequest, useModel } from 'umi';
import styles from './index.less';

export default function (props: any) {
  const { history } = props;
  const { refresh } = useModel('@@initialState');
  const onFinish = (values: any) => {
    run(values);
  };
  const { run, loading } = useRequest(login, {
    manual: true,
    onSuccess(res) {
      setUserInfo(res);
      history.push('/home');
      refresh();
    },
  });
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginContainer}>
        <Form
          name="normal_login"
          className={styles.loginForm}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="userName"
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.loginFormButton}
              loading={loading}
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
