import moment from 'moment';
import isBlank from '../../helpers/isBlank';

function dateFilter() {
  return input => {
    if (isBlank(input)) {
      return '';
    }
    let day = moment(input).format('ddd');
    let date = moment(input).format('L');
    return `${day} ${date}`;
  };
}

export default dateFilter;
