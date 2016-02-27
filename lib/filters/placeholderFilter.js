function placeholderFilter() {
  return input => {
    if (input === null || input === undefined || input === '') {
      return '&nbsp;';
    }
    return input;
  };
}

export default placeholderFilter;
