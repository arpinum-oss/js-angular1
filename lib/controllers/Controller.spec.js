'use strict';

let Bluebird = require('bluebird');
import Controller from './Controller';

describe('The controller', () => {

  it('should resolve a promise', () => {
    let controller = new Controller();

    controller.resolve(Bluebird.resolve());

    controller.loading.should.be.true;
    return controller.construction.then(() => {
      controller.should.not.have.key('loading');
    });
  });
});
