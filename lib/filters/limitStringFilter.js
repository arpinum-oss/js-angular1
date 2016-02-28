import _ from 'lodash';

function limitStringFilter() {
  return (input, length) => {
    return _.truncate(input, {length: length});
  };
}

export default limitStringFilter;
