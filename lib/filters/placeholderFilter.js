import isBlank from '../helpers/isBlank';

function placeholderFilter() {
  return input => {
    if (isBlank(input)) {
      return '&nbsp;';
    }
    return input;
  };
}

export default placeholderFilter;
