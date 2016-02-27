import moment from 'moment';

function dateFilter() {
  return input => {
    if (input === null || input === undefined) {
      return '';
    }
    let day = moment(input).format('ddd');
    let date = moment(input).format('L');
    return `${day} ${date}`;
  };
}

export default dateFilter;
