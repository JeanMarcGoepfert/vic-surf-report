'use strict';

import { EventEmitter } from 'events';

let _reports = {};

export default class BaseStore extends EventEmitter {

  getAll() { return _reports }

  getReport(location) {
    return _reports[location] || {}
  }

  set(payload) {
    let location = payload.report.location;
    _reports[location] = payload;
    this.emitChange();
  }
}
