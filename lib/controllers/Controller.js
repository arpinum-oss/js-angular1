class Controller {

  resolve(promise) {
    this.loading = true;
    this.construction = promise.finally(() => {
      delete this.loading;
    });
    return this.construction;
  }
}

export default Controller;
