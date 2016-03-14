'use strict';

import momentFilter from './momentFilter';

describe('The moment filter', () => {

  let filter;

  beforeEach(() => {
    filter = momentFilter();
  });

  it('should format the date according to moment patterns', () => {
    let date = new Date(2016, 1, 22);

    filter(date, 'ddd L').should.equal('Mon 02/22/2016');
  });

  it('should return empty string if input is empty', () => {
    filter().should.equal('');
    filter(null).should.equal('');
  });

  it('should return empty string if pattern is empty', () => {
    filter(new Date()).should.equal('');
    filter(new Date(), null).should.equal('');
  });
});
