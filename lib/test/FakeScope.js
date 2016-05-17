'use strict';

let Bluebird = require('bluebird');
let _ = require('lodash');

class FakeScope {
  constructor() {
    this._events = {};
  }

  $on(event, action) {
    if (!this._events[event]) {
      this._events[event] = [];
    }
    this._events[event].push(action);

    return () => {
      this._deregister(event, action);
    };
  }

  $once(event, action) {
    let self = this;
    self.$on(event, function () {
      self._deregister(event, action);
      action.apply(self, arguments);
    });
  }

  _deregister(event, action) {
    this._events[event] = _.without(this._events[event], action);
  }

  $emit(event) {
    return Bluebird.map(this._events[event], action => {
      return action.apply(null, arguments);
    });
  }
}

export default FakeScope;
