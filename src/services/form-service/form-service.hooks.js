
module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ function(context) {
        if(!context.data.name) {
          throw new Error('name  can not be empty');
        }
        if(!context.data.email) {
          throw new Error('email  can not be empty');
        }
        if(!context.data.date_of_birth) {
          throw new Error('Date Of birth  can not be empty');
        }
        if(!context.data.gender) {
          throw new Error('gender  can not be empty');
        }
        if(!context.data.budget) {
          throw new Error('budget  can not be empty');
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
    create: [ function(hook,next){
      const { email,name,date_of_birth,budget,text,updatedAt,createdAt,gender, ...noA } = hook.result;
      hook.result = noA;
      hook.result.statusCode = 200;
      hook.result.message = "Data Saved SuccessFully";
      next();
    }],
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
