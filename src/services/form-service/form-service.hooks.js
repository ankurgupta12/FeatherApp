
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ function(context) {
        if(context.data.name || context.data.name.trim() === '') {
          throw new Error('name  can not be empty');
        }
      }
    ],
    update: [],
    patch: [],
    remove: []  
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
