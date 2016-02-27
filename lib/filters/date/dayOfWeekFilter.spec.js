'use strict';

import dayOfWeekFilter from './dayOfWeekFilter';

describe('The day of week filter', () => {

  let filter;

  beforeEach(() => {
    filter = dayOfWeekFilter();
  });

  it('should return day as string from the day number', () => {
    filter(1).should.deep.equal('Monday');
    filter(3).should.deep.equal('Wednesday');
  });
});
