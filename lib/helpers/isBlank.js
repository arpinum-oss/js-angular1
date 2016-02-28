import _ from 'lodash';

function isBlank(input) {
  if (_.isNumber(input) && !_.isNaN(input)) {
    return false;
  }
  if (_.isBoolean(input) && input) {
    return false;
  }
  if (_.isRegExp(input)) {
    return false;
  }
  if (_.isDate(input)) {
    return false;
  }
  return _.isEmpty(input);
}

export default isBlank;
