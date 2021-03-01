const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api-gateway',
    createProxyMiddleware({
      target: 'https://api-gateway.elastichire.com',
      changeOrigin: true,
      onProxyReq: function (proxyReq, req, res) {
        proxyReq.setHeader('client_id', 'client_id_id_client');
        proxyReq.setHeader('client_secret', 'client_secret_secret_client');
      }
    })
  );
};