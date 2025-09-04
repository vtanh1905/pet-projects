export default () => ({
  app: {
    name: process.env.APP_NAME || 'nestjs-app',
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '3000', 10),
    globalPrefix: process.env.GLOBAL_PREFIX || 'api',
    version: process.env.APP_VERSION || '1.0',
  },
});
