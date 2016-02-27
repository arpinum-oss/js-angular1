import _ from 'lodash';
import moment from 'moment';

/* @ngInject */
function orderByDayOfWeekFilter($locale) {
  return input => {
    let firstDayOfWeek = moment.localeData($locale.id).firstDayOfWeek();
    let sorted = (input || []).sort();
    let beginning = _.filter(sorted, d => d >= firstDayOfWeek);
    let end = _.filter(sorted, d => d < firstDayOfWeek);
    return beginning.concat(end);
  };
}

export default orderByDayOfWeekFilter;
