export default {
  'POST /api/user/login': {
    body: {
      userId: 2321,
      userName: 'liangzn',
      name: '阿良',
      token:
        'eyJhbGciOiJIUzI1NiJ9.eyJMT0dJTl9VU0VSX0tFWSI6ImZkYmExMzE5LTViMzMtNGQzYy1hOTJiLTE2Mjk4OWE0MjFkNiJ9.T7Kv4-Mb-NtQdR7NkhiGmZTaa_vH-xX451mQu9eNQvIliangzn',
      roleName: '产业链图谱及知识应用（全部）',
      permissionItemList: [
        {
          code: 'graph-explore',
          name: '图谱探查',
          canAccess: true,
          dataType: null,
          permissionItemList: [
            {
              code: 'industry-chain-graph',
              name: '产业链图谱',
              canAccess: true,
              dataType: null,
              permissionItemList: null,
              button: false,
            },
            {
              code: 'supply-chain-graph',
              name: '供应链图谱',
              canAccess: true,
              dataType: null,
              permissionItemList: null,
              button: false,
            },
          ],
        },
      ],
    },
    header: {
      code: 200,
      message: '操作成功',
    },
  },
  'POST /api/user/info': {
    body: {
      userId: 2321,
      userName: 'liangzn',
      name: '阿良',
      token:
        'eyJhbGciOiJIUzI1NiJ9.eyJMT0dJTl9VU0VSX0tFWSI6ImZkYmExMzE5LTViMzMtNGQzYy1hOTJiLTE2Mjk4OWE0MjFkNiJ9.T7Kv4-Mb-NtQdR7NkhiGmZTaa_vH-xX451mQu9eNQvIliangzn',
      roleName: '产业链图谱及知识应用（全部）',
      permissionItemList: [
        {
          code: 'graph-explore',
          name: '图谱探查',
          canAccess: true,
          dataType: null,
          permissionItemList: [
            {
              code: 'industry-chain-graph',
              name: '产业链图谱',
              canAccess: true,
              dataType: null,
              permissionItemList: null,
              button: false,
            },
            {
              code: 'supply-chain-graph',
              name: '供应链图谱',
              canAccess: true,
              dataType: null,
              permissionItemList: null,
              button: false,
            },
          ],
        },
      ],
    },
    header: {
      code: 200,
      message: '操作成功',
    },
  },
};
