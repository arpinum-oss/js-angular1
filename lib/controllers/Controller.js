let Bluebird = require('bluebird');

class Controller {

  constructor() {
    this.construction = Bluebird.resolve()
      .then(() => {
        this.loading = true;
        return this.resolve().finally(() => {
          delete this.loading;
        });
      });
  }

  resolve() {
    return Bluebird.resolve();
  }
}

export default Controller;
