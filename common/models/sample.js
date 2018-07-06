'use strict';

module.exports = function(Sample) {
  Sample.sharedClass._methods.forEach(obj => Sample.disableRemoteMethodByName(obj.name));

  Sample.remoteMethod('testById', {
    accepts: [
      { arg: 'id', type: 'string', required: true },
    ],
    http: { path: '/remote/test/:id', verb: 'get' },
    returns: { arg: 'test', type: [Sample] },
  });

  Sample.testById = (id) => {
    const filter = { where: { id } };
    return Test.find(id);
  };

};
