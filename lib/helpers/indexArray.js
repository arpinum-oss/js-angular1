import _ from 'lodash';

function indexArray(array, key) {
  return _.reduce(array, (result, element) => {
    result[element[key]] = element;
    return result;
  }, {});
}

export default indexArray;
