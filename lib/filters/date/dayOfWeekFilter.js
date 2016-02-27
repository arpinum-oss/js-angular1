import moment from 'moment';

/* @ngInject */
function dayOfWeekFilter() {
  return input => moment().day(input).format('dddd');
}

export default dayOfWeekFilter;
