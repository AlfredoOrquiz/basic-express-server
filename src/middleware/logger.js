'use strict';

const logger = (request, response, next) => {
  request.message = 'This is a mssage from the logger';
  next();
};

module.export = logger;
