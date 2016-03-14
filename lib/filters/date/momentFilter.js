import moment from 'moment';
import isBlank from '../../helpers/isBlank';

function momentFilter() {
  return (input, pattern) => {
    if (isBlank(input) || isBlank(pattern)) {
      return '';
    }
    return moment(input).format(pattern);
  };
}

export default momentFilter;
