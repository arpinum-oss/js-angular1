'use strict';

import placeholderFilter from './placeholderFilter';

describe('The place holder filter', () => {

  let filter;

  beforeEach(() => {
    filter = placeholderFilter();
  });

  it('should return value if present', () => {
    filter('value').should.equal('value');
    filter(0).should.equal(0);
  });

  it('should return a non breakable space if value is blank', () => {
    filter().should.equal('&nbsp;');
    filter(null).should.equal('&nbsp;');
    filter('').should.equal('&nbsp;');
  });
});
