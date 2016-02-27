'use strict';

import valueInFilter from './valueInFilter';

describe('The value in filter', () => {

  let filter;

  beforeEach(() => {
    filter = valueInFilter();
  });

  it('should return the corresponding value in the object', () => {
    let object = {key: 'value'};

    filter('key', object).should.equal('value');
  });

  it('should return an empty string if object is empty', () => {
    filter('key', null).should.equal('');
  });
});
