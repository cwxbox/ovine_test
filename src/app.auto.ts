/**
 * ovine 应用配置。文档：https://ovine.igroupes.com/org/docs/advance/configurations#%E5%BA%94%E7%94%A8%E9%85%8D%E7%BD%AE
 * 路径别名映射:
 * '@core/*': '@core/*'
 * '～/*': '/src/*'
 */

const config = {
  env: {
    default: {
      disableLimit: true,
      domains: {
        api: 'https://test-api.com',
      },
    },
    // 本地开发
    localhost: {
      domains: {
        api: 'https://dev-api.com',
      },
    },
    // 测试环境
    staging: {
      domains: {
        api: 'https://test-api.com',
      },
    },
    // 生产环境
    production: {
      domains: {
        api: 'https://prod-api.com',
      },
    },
  },
  entry: [
    {
      type: 'preset-route', // 路由组件
      path: '/editor',
      pathToComponent: true,
    },
    {
      type: 'preset-route', // 路由组件
      path: '/404',
      pathToComponent: true,
    },
    {
      type: 'preset-route', // 路由组件
      path: '/',
      pathToComponent: '/result',
    },
  ],
}

export default config
