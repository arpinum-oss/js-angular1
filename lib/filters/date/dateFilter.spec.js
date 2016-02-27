'use strict';

import dateFilter from './dateFilter';

describe('The date filter', () => {

  let filter;

  beforeEach(() => {
    filter = dateFilter();
  });

  it('should return short day + short date', () => {
    let date = new Date(2016, 1, 22);

    filter(date).should.equal('Mon 02/22/2016');
  });

  it('should return empty string if input is empty', () => {
    filter().should.equal('');
    filter(null).should.equal('');
  });
});
