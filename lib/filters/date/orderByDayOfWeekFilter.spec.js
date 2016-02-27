'use strict';

let orderByDayOfWeekFilter = require('./orderByDayOfWeekFilter');

describe('The order by day of week filter', () => {

  let $locale;
  let filter;

  beforeEach(() => {
    $locale = {};
    filter = orderByDayOfWeekFilter.default($locale);
  });

  it('should do nothing if first day is 0/sunday', () => {
    $locale.id = 'en';
    let days = filter([0, 1, 2, 3, 4, 5, 6]);

    days.should.deep.equal([0, 1, 2, 3, 4, 5, 6]);
  });

  it('should do nothing if input is empty', () => {
    $locale.id = 'en';
    let days = filter();

    days.should.deep.equal([]);
  });

  it('should order days considering first day is not 0/sunday', () => {
    $locale.id = 'fr';
    let days = filter([0, 1, 2, 3, 4, 5, 6]);

    days.should.deep.equal([1, 2, 3, 4, 5, 6, 0]);
  });

  it('should order few days considering first day is not 0/sunday', () => {
    $locale.id = 'fr';
    let days = filter([0, 2, 5, 6]);

    days.should.deep.equal([2, 5, 6, 0]);
  });

  it('should order few days unordered considering first day is not 0/sunday', () => {
    $locale.id = 'fr';
    let days = filter([2, 6, 0, 5]);

    days.should.deep.equal([2, 5, 6, 0]);
  });
});
