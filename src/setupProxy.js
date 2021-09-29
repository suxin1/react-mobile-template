const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  // app.use(
  //   proxy('/base/', {
  //     target: 'http://45.32.15.21:8090/',
  //     changeOrigin: true,
  //   }),
  // );
  // app.use(
  //   proxy('/api/', {
  //     target: 'http://192.168.31.50:7120/',
  //     changeOrigin: true,
  //   }),
  // );
  app.use('/api/', createProxyMiddleware({ target: 'http://192.168.31.50:7120/', changeOrigin: true }));
};
