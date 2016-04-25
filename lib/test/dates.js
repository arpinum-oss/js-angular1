'use strict';

import moment from 'moment';

let dates = {
  from: createDate,
  fromDateTime: createDateTime,
  fromTime: createTime,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7
};

function createDate(string) {
  return moment(string, 'YYYY-MM-DD').toDate();
}

function createDateTime(string) {
  return moment(string, 'YYYY-MM-DD HH:mm').toDate();
}

function createTime(string) {
  return moment(string, 'HH:mm').toDate();
}

export default dates;
