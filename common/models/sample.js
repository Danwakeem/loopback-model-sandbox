'use strict';

module.exports = function(Sample) {
  Sample.sharedClass._methods.forEach(obj => Sample.disableRemoteMethodByName(obj.name));

  Sample.remoteMethod('incorrect', {
    accepts: [
      { arg: 'id', type: 'string', required: true },
    ],
    http: { path: '/fail/:id', verb: 'get' },
    returns: { arg: 'test', type: [Sample] },
  });

  Sample.remoteMethod('correct', {
    accepts: [
      { arg: 'id', type: 'string', required: true },
    ],
    http: { path: '/pass/:id', verb: 'get' },
    returns: { arg: 'test', type: [Sample], root: true },
  });


  Sample.incorrect = (id) => {
    const filter = { where: { id } };
    return Sample.find(filter);
  };

  Sample.incorrect = (id) => {
    const filter = { where: { id } };
    return Sample.find(filter);
  }

};
