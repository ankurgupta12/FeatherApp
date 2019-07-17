const assert = require('assert');
const app = require('../../src/app');

describe('\'form-service\' service', () => {
  it('registered the service', () => {
    const service = app.service('form-service');

    assert.ok(service, 'Registered the service');
  });
});
