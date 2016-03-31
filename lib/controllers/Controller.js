class Controller {

  resolve(promise, resolveKey) {
    let _resolveKey = resolveKey || 'loading';
    this[_resolveKey] = true;
    this.construction = promise.finally(() => {
      delete this[_resolveKey];
    });
    return this.construction;
  }
}

export default Controller;
