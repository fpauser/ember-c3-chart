// blueprints/<your-addon-name>/index.js
module.exports = {
  normalizeEntityName() {}, // no-op since we're just adding dependencies

  afterInstall() {
    return Promise.all([
      this.addPackagesToProject([
        { name: 'd3', target: '^5.4.0' },
        { name: 'c3', target: '^0.6.1' }
      ])
    ]);
  }
};
