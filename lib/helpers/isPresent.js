import isBlank from './isBlank';

function isPresent(input) {
  return !isBlank(input);
}

export default isPresent;
