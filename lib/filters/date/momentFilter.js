import moment from 'moment';
import isBlank from '../../helpers/isBlank';

function momentFilter() {
  return (input, pattern, setter) => {
    if (isBlank(input) || isBlank(pattern)) {
      return '';
    }
    return currentMoment().format(pattern);

    function currentMoment() {
      if (setter) {
        return moment()[setter](input);
      }
      return moment(input);
    }
  };
}

export default momentFilter;
