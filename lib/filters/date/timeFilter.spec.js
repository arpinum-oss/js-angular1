'use strict';

import timeFilter from './timeFilter';

describe('The time filter', () => {

  let filter;

  beforeEach(() => {
    filter = timeFilter();
  });

  it('should return time from date', () => {
    let date = new Date(2015, 1, 1, 10, 52, 38);

    filter(date).should.equal('10h52');
  });
});
