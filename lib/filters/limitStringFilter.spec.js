'use strict';

import limitStringFilter from './limitStringFilter';

describe('The limit string filter', () => {

  let filter;

  beforeEach(() => {
    filter = limitStringFilter();
  });

  it('should return vanilla string if short enough', () => {
    filter('short', 50).should.equal('short');
  });

  it('should return truncated string if too long', () => {
    filter('the string is very long', 10).should.equal('the str...');
  });

  it('should return at least the ellipsis if input is too short', () => {
    filter('short', 1).should.equal('...');
  });

  it('should return an empty string if no input', () => {
    filter('', 10).should.equal('');
    filter(null, 10).should.equal('');
  });
});
