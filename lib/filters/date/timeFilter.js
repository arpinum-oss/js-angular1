import moment from 'moment';

function timeFilter() {
  return input => moment(input).format('HH[h]mm');
}

export default timeFilter;
