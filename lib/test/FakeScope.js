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
      this._events[event] = _.without(this._events[event], action);
    };
  }

  $emit(event) {
    return Bluebird.map(this._events[event], action => {
      return action.apply(null, arguments);
    });
  }
}

export default FakeScope;
