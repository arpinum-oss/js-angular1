'use strict';

import DateService from './DateService';

describe('The date service', () => {

  let service;

  beforeEach(() => {
    service = new DateService();
  });

  it('should combine date and time', () => {
    let date = new Date(2015, 1, 2);
    let time = new Date(2000, 3, 5, 22, 52, 38, 7);

    let result = service.combineDateAndTime(date, time);

    result.should.deep.equal(new Date(2015, 1, 2, 22, 52, 38, 0));
  });

  it('should create date from time', () => {
    let date = service.dateFromTime(22, 53);

    date.should.deep.equal(new Date(1970, 0, 1, 22, 53, 0, 0));
  });

  it('should set current date', () => {
    let date = new Date(2015, 1, 2);

    DateService.setCurrentDate(date);

    service.now().should.deep.equal(date);
  });

  it('should return today based on current date and time', () => {
    let dateTime = new Date(2000, 3, 5, 22, 52, 38, 7);
    DateService.setCurrentDate(dateTime);

    service.today().should.deep.equal(new Date(2000, 3, 5, 0, 0, 0, 0));
  });
});
