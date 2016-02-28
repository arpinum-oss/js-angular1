'use strict';

import isPresent from './isPresent';

describe('The is present helper', function () {

  it('should say that blank value is not present and conversely', function () {
    isPresent('').should.be.false;
    isPresent('a').should.be.true;
    isPresent(3).should.be.true;
    isPresent(true).should.be.true;
  });
});
