import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const SAMPLE_DATA = {
  axis: {
    x: { label: "histname" },
    y: { label: "Count" }
  },
  data: {
    bar: {
      width: {
        ratio: 0.7
      }
    },
    colors: {},
    columns: [
      ["Category 0", 0],
      ["Category 1", 1],
      ["Category 2", 2]
    ]
  }
};


module('Integration | Component | c3-chart', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
     this.set('axis', SAMPLE_DATA.axis);
     this.set('data', SAMPLE_DATA.data);

    await render(hbs`{{c3-chart axis=axis data=data}}`);
    assert.ok(this.element.querySelector('svg'), 'svg rendered');
  });
});
