'use strict';

module.exports = {
  name: 'ember-c3-chart',

  included(app) {
    this._super.included.apply(this, arguments);

    // import c3
    app.import('node_modules/c3/c3.js');
    app.import('node_modules/c3/c3.css');
    app.import('vendor/shims/c3.js');
  }
};
