'use strict';

let Bluebird = require('bluebird');

class FakeScope {
  constructor() {
    this._events = {};
  }

  $on(event, action) {
    if (!this._events[event]) {
      this._events[event] = [];
    }
    this._events[event].push(action);
  }

  $emit(event) {
    return Bluebird.map(this._events[event], action => {
      return action.apply(null, arguments);
    });
  }
}

export default FakeScope;
