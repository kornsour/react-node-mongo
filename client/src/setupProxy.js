const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/api", "/auth/google"],
    createProxyMiddleware({
      // TODO: Docker container running 5000 that connects to 5001 locally on MacOS
      target: "http://localhost:5001",
    })
  );
};
