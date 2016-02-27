function limitStringFilter() {
  return (input, length) => {
    if (input === null || input === undefined) {
      return '';
    }
    if (input.length <= length) {
      return input;
    }
    return input.substring(0, length - 3) + '...';
  };
}

export default limitStringFilter;
