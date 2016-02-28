'use strict';

import isBlank from './isBlank';

describe('The is blank helper', function () {

  it('should say that empty values are blank', function () {
    isBlank('').should.be.true;
    isBlank(null).should.be.true;
    isBlank({}.plop).should.be.true;
    isBlank(false).should.be.true;
    isBlank(parseInt('not a number')).should.be.true;
  });

  it('should say that non empty values are not blank', function () {
    isBlank('a').should.be.false;
    isBlank(3).should.be.false;
    isBlank({plop: 'plop'}).should.be.false;
    isBlank(/regex/).should.be.false;
    isBlank(new Date()).should.be.false;
  });
});
