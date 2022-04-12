'use strict';

define("emb-app/tests/integration/components/postlist/component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | postlist', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "vPsd5jpZ",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"postlist\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "ZAiO7/jW",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"postlist\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("emb-app/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('adapters/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/post.js should pass ESLint\n\n');
  });
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('models/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/add-task/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/add-task/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/edit-task/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/edit-task/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/components/task-list/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/components/task-list/component.js should pass ESLint\n\n');
  });
  QUnit.test('pods/posts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'pods/posts/route.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('serializers/post.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/post.js should pass ESLint\n\n');
  });
  QUnit.test('services/tasklist.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/tasklist.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('emb-app/pods/components/add-task/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/components/add-task/template.hbs should pass TemplateLint.\n\nemb-app/pods/components/add-task/template.hbs\n  2:0  error  Incorrect indentation for `<label>` beginning at L2:C0. Expected `<label>` to be at an indentation of 2 but was found at 0.  block-indentation\n  3:0  error  Incorrect indentation for `<input>` beginning at L3:C0. Expected `<input>` to be at an indentation of 2 but was found at 0.  block-indentation\n  5:0  error  Incorrect indentation for `<label>` beginning at L5:C0. Expected `<label>` to be at an indentation of 2 but was found at 0.  block-indentation\n  6:0  error  Incorrect indentation for `<input>` beginning at L6:C0. Expected `<input>` to be at an indentation of 2 but was found at 0.  block-indentation\n  8:0  error  Incorrect indentation for `<button>` beginning at L8:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
  QUnit.test('emb-app/pods/components/edit-task/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/components/edit-task/template.hbs should pass TemplateLint.\n\nemb-app/pods/components/edit-task/template.hbs\n  2:3  error  Incorrect indentation for `<h2>` beginning at L2:C3. Expected `<h2>` to be at an indentation of 2 but was found at 3.  block-indentation\n  6:0  error  Incorrect indentation for `<label>` beginning at L6:C0. Expected `<label>` to be at an indentation of 2 but was found at 0.  block-indentation\n  7:0  error  Incorrect indentation for `<input>` beginning at L7:C0. Expected `<input>` to be at an indentation of 2 but was found at 0.  block-indentation\n  9:0  error  Incorrect indentation for `<label>` beginning at L9:C0. Expected `<label>` to be at an indentation of 2 but was found at 0.  block-indentation\n  10:0  error  Incorrect indentation for `<input>` beginning at L10:C0. Expected `<input>` to be at an indentation of 2 but was found at 0.  block-indentation\n  12:0  error  Incorrect indentation for `<button>` beginning at L12:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n  14:0  error  img tags must have an alt attribute  img-alt-attributes\n');
  });
  QUnit.test('emb-app/pods/components/task-list/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/components/task-list/template.hbs should pass TemplateLint.\n\nemb-app/pods/components/task-list/template.hbs\n  2:0  error  Incorrect indentation for `<button>` beginning at L2:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n  3:0  error  Incorrect indentation for `<button>` beginning at L3:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n  4:0  error  Incorrect indentation for `<button>` beginning at L4:C0. Expected `<button>` to be at an indentation of 2 but was found at 0.  block-indentation\n  7:0  error  Incorrect indentation for `<div>` beginning at L7:C0. Expected `<div>` to be at an indentation of 2 but was found at 0.  block-indentation\n  8:0  error  Incorrect indentation for `{{#each}}` beginning at L8:C0. Expected `{{#each}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  32:14  error  Incorrect indentation for `each` beginning at L8:C0. Expected `{{/each}}` ending at L32:C14 to be at an indentation of 0 but was found at 5.  block-indentation\n  9:4  error  Incorrect indentation for `<tr>` beginning at L9:C4. Expected `<tr>` to be at an indentation of 2 but was found at 4.  block-indentation\n  30:10  error  Incorrect indentation for `tr` beginning at L9:C4. Expected `</tr>` ending at L30:C10 to be at an indentation of 4 but was found at 5.  block-indentation\n  10:8  error  Incorrect indentation for `<div>` beginning at L10:C8. Expected `<div>` to be at an indentation of 6 but was found at 8.  block-indentation\n  23:8  error  Incorrect indentation for `<td>` beginning at L23:C8. Expected `<td>` to be at an indentation of 6 but was found at 8.  block-indentation\n  11:8  error  Incorrect indentation for `<td>` beginning at L11:C8. Expected `<td>` to be at an indentation of 10 but was found at 8.  block-indentation\n  15:8  error  Incorrect indentation for `<td>` beginning at L15:C8. Expected `<td>` to be at an indentation of 10 but was found at 8.  block-indentation\n  18:8  error  Incorrect indentation for `<td>` beginning at L18:C8. Expected `<td>` to be at an indentation of 10 but was found at 8.  block-indentation\n  12:12  error  Incorrect indentation for `<input>` beginning at L12:C12. Expected `<input>` to be at an indentation of 10 but was found at 12.  block-indentation\n  16:12  error  Incorrect indentation for `<span>` beginning at L16:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  19:12  error  Incorrect indentation for `<span>` beginning at L19:C12. Expected `<span>` to be at an indentation of 10 but was found at 12.  block-indentation\n  29:12  error  Incorrect indentation for `td` beginning at L23:C8. Expected `</td>` ending at L29:C12 to be at an indentation of 8 but was found at 7.  block-indentation\n  24:12  error  Incorrect indentation for `<div>` beginning at L24:C12. Expected `<div>` to be at an indentation of 10 but was found at 12.  block-indentation\n  28:19  error  Incorrect indentation for `div` beginning at L24:C12. Expected `</div>` ending at L28:C19 to be at an indentation of 12 but was found at 13.  block-indentation\n  25:13  error  Incorrect indentation for `<button>` beginning at L25:C13. Expected `<button>` to be at an indentation of 14 but was found at 13.  block-indentation\n  26:13  error  Incorrect indentation for `<button>` beginning at L26:C13. Expected `<button>` to be at an indentation of 14 but was found at 13.  block-indentation\n  6:0  error  Tables must have a table group (thead, tbody or tfoot).  table-groups\n');
  });
  QUnit.test('emb-app/pods/posts/template.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'emb-app/pods/posts/template.hbs should pass TemplateLint.\n\nemb-app/pods/posts/template.hbs\n  2:0  error  Incorrect indentation for `<h1>` beginning at L2:C0. Expected `<h1>` to be at an indentation of 2 but was found at 0.  block-indentation\n  4:0  error  Incorrect indentation for `{{add-task}}` beginning at L4:C0. Expected `{{add-task}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  6:0  error  Incorrect indentation for `{{task-list}}` beginning at L6:C0. Expected `{{task-list}}` to be at an indentation of 2 but was found at 0.  block-indentation\n  7:0  error  Incorrect indentation for `{{edit-task}}` beginning at L7:C0. Expected `{{edit-task}}` to be at an indentation of 2 but was found at 0.  block-indentation\n');
  });
});
define("emb-app/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/postlist/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/postlist/component-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/models/model-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/model-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/posts/route-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/posts/route-test.js should pass ESLint\n\n');
  });
});
define("emb-app/tests/test-helper", ["emb-app/app", "emb-app/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("emb-app/tests/unit/models/model-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Model | post', function (hooks) {
    (0, _emberQunit.setupTest)(hooks); // Replace this with your real tests.

    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('post', {});
      assert.ok(model);
    });
  });
});
define("emb-app/tests/unit/posts/route-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | posts', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:posts');
      assert.ok(route);
    });
  });
});
define('emb-app/config/environment', [], function() {
  var prefix = 'emb-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('emb-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
