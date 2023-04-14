import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { login, getUserInfo } from '@/services/user';
import { setUserInfo } from '@/utils/authority';
import { useRequest } from 'umi';
import styles from './index.less';

export default function () {
  const onFinish = (values: any) => {
    run(values);
  };
  const { run, loading } = useRequest(login, {
    manual: true,
    onSuccess(res: any) {
      getUser(res.token);
    },
  });
  const { run: getUser } = useRequest(getUserInfo, {
    manual: true,
    onSuccess(res) {
      setUserInfo(res);
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
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
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
