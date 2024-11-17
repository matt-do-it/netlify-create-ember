import { module, test } from 'qunit';
import { setupTest } from 'ember-static/tests/helpers';

module('Unit | Controller | page', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:page');
    assert.ok(controller);
  });
});
