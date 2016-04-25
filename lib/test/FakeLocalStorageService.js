'use strict';

class FakeLocalStorageService {
  constructor() {
    this._storage = {};
  }

  get(key) {
    return this._storage[key];
  }

  set(key, value) {
    this._storage[key] = value;
  }

  remove(key) {
    delete this._storage[key];
  }
}

export default FakeLocalStorageService;
