const formService = require('./form-service/form-service.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(formService);
};
