function valueInFilter() {
  return (input, object) => object ? object[input] : '';
}

export default valueInFilter;
