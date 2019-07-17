// Initializes the `form-service` service on path `/form-service`
const createService = require('feathers-sequelize');
const createModel = require('../../models/form-service.model');
const hooks = require('./form-service.hooks');
const filters = require('./form-service.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'form-service',
    Model,
    paginate
  };


  // Initialize our service with any options it requires
  app.use('/form-service', createService(options));
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('form-service');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
