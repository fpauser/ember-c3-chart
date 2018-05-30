'use strict';

module.exports = {
  name: 'ember-c3-chart',

  included(app) {
    this._super.included.apply(this, arguments);

    // import d3
    app.import('node_modules/d3/dist/d3.min.js');
    app.import('vendor/shims/d3.js');

    // import c3
    app.import('node_modules/c3/c3.js');
    app.import('node_modules/c3/c3.css');
    app.import('vendor/shims/c3.js');
  }
};
