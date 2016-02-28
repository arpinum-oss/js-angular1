'use strict';

import indexArray from './indexArray';

describe('The index array helper', () => {

  it('should index array with the given key', () => {
    let array = [
      {id: '1', name: 'toto'},
      {id: '2', name: 'tutu'}
    ];

    let indexedArray = indexArray(array, 'id');

    let expected = {
      '1': {id: '1', name: 'toto'},
      '2': {id: '2', name: 'tutu'}
    };
    indexedArray.should.deep.equal(expected);
  });
});
