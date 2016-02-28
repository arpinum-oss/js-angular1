'use strict';

let Bluebird = require('bluebird');
import Controller from './Controller';

describe('The controller', () => {

  it('should resolve a promise during construction', () => {
    let controller = new Controller();

    return controller.construction.should.eventually.be.resolved;
  });

  class SpecificController extends Controller {
    resolve() {
      return Bluebird.resolve('resolved');
    }
  }

  it('should resolve specific promise', () => {
    let controller = new SpecificController();

    return controller.construction.should.eventually.equal('resolved');
  });
});
