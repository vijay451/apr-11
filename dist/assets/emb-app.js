'use strict';



;define("emb-app/adapters/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTAdapter.extend({
    host: 'https://jsonplaceholder.typicode.com'
  });

  _exports.default = _default;
});
;define("emb-app/app", ["exports", "emb-app/resolver", "ember-load-initializers", "emb-app/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("emb-app/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("emb-app/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("emb-app/helpers/app-version", ["exports", "emb-app/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("emb-app/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("emb-app/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("emb-app/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("emb-app/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("emb-app/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("emb-app/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("emb-app/helpers/loc", ["exports", "@ember/string/helpers/loc"], function (_exports, _loc) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _loc.default;
    }
  });
  Object.defineProperty(_exports, "loc", {
    enumerable: true,
    get: function () {
      return _loc.loc;
    }
  });
});
;define("emb-app/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("emb-app/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("emb-app/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEqualHelper", {
    enumerable: true,
    get: function () {
      return _notEqual.notEqualHelper;
    }
  });
});
;define("emb-app/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("emb-app/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("emb-app/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("emb-app/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("emb-app/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("emb-app/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "emb-app/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("emb-app/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("emb-app/initializers/ember-data", ["exports", "ember-data/setup-container"], function (_exports, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("emb-app/initializers/export-application-global", ["exports", "emb-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("emb-app/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("emb-app/models/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const {
    Model,
    attr
  } = _emberData.default;

  var _default = Model.extend({
    due: attr('string'),
    description: attr('string')
  });

  _exports.default = _default;
});
;define("emb-app/pods/components/add-task/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    newDue: "",
    newDescription: "",
    store: Ember.inject.service(),
    tasklist: Ember.inject.service(),

    init() {
      this._super(...arguments);
    },

    actions: {
      addBtn() {
        const userData = this.store.createRecord("post", {
          due: this.get("newDue"),
          description: this.get("newDescription")
        });
        this.tasklist.get("data").pushObject(userData);
        document.getElementById("due").value = null;
        document.getElementById("description").value = null;
      },

      dueChange(e) {
        this.set("newDue", e.target.value);
      },

      descriptionChange(e) {
        this.set("newDescription", e.target.value);
      }

    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/components/add-task/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3eYqu+f+",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"addTask\"],[9],[0,\" \\n\"],[7,\"label\"],[9],[0,\"Due\"],[10],[0,\"\\n\"],[7,\"input\"],[11,\"class\",\"due\"],[11,\"id\",\"due\"],[12,\"onInput\",[27,\"action\",[[22,0,[]],\"dueChange\"],null]],[11,\"type\",\"text\"],[9],[10],[0,\"\\n\\n\"],[7,\"label\"],[9],[0,\"Task Description\"],[10],[0,\"\\n\"],[7,\"input\"],[11,\"class\",\"description\"],[11,\"id\",\"description\"],[12,\"onInput\",[27,\"action\",[[22,0,[]],\"descriptionChange\"],null]],[11,\"type\",\"text\"],[9],[10],[0,\"\\n\\n\"],[7,\"button\"],[11,\"class\",\"btn btn-light\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"addBtn\"],null]],[11,\"type\",\"button\"],[9],[0,\"Add\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/components/add-task/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/components/edit-task/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  // import {inject as service} from '@ember/service';
  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("emb-app/pods/components/edit-task/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hyWk7duu",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"edit\"],[9],[0,\"\\n   \"],[7,\"h2\"],[9],[0,\"Edit task\"],[10],[0,\" \\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"editBox\"],[9],[0,\"\\n\"],[7,\"label\"],[9],[0,\"Due\"],[10],[0,\"\\n\"],[7,\"input\"],[11,\"class\",\"due\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n\\n\"],[7,\"label\"],[9],[0,\"Task Description\"],[10],[0,\"\\n\"],[7,\"input\"],[11,\"class\",\"description\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n\\n\"],[7,\"button\"],[11,\"class\",\"btn btn-primary\"],[11,\"type\",\"button\"],[9],[0,\"Save\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"img\"],[11,\"src\",\"../assets/images/zoey.png\"],[9],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/components/edit-task/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/components/task-list/component", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    tasklist: Ember.inject.service(),
    num: null,
    store: Ember.inject.service(),
    values: Ember.computed('tasklist.data', function () {
      const data = this.get('tasklist.data');
      return data;
    }),

    init() {
      this._super(...arguments);

      const values = [{
        id: 1,
        due: "563",
        description: "vishal"
      }, {
        id: 2,
        due: "563",
        description: "vishal"
      }, {
        id: 3,
        due: "563",
        description: "vishal"
      }];
      values.forEach(value => {
        const userData = this.store.createRecord("post", value);
        this.get('tasklist.data').pushObject(userData);
      });
    },

    actions: {
      removeClick(val) {
        const filterData = this.values.filter(value => {
          return value.id !== val;
        });
        this.set('tasklist.data', filterData);
      }

    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/components/task-list/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "MnQgpt6c",
    "block": "{\"symbols\":[\"value\",\"index\"],\"statements\":[[7,\"div\"],[11,\"class\",\"button\"],[9],[0,\" \\n\"],[7,\"button\"],[11,\"class\",\"btn btn-primary\"],[11,\"type\",\"button\"],[9],[0,\"All\"],[10],[0,\"\\n\"],[7,\"button\"],[11,\"class\",\"btn btn-primary\"],[11,\"type\",\"button\"],[9],[0,\"Complete\"],[10],[0,\"\\n\"],[7,\"button\"],[11,\"class\",\"btn btn-primary\"],[11,\"type\",\"button\"],[9],[0,\"Incomplete\"],[10],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"table\"],[9],[0,\"\\n\"],[7,\"div\"],[11,\"class\",\"table table-borderless\"],[9],[0,\"\\n\"],[4,\"each\",[[23,[\"values\"]]],null,{\"statements\":[[0,\"    \"],[7,\"tr\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"details\"],[9],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n            \"],[7,\"input\"],[11,\"type\",\"checkbox\"],[9],[10],[0,\"\\n        \"],[10],[0,\"\\n         \\n        \"],[7,\"td\"],[9],[0,\"\\n            \"],[7,\"span\"],[9],[1,[22,2,[]],false],[0,\":\"],[1,[22,1,[\"due\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[11,\"id\",\"due\"],[9],[0,\"\\n            \"],[7,\"span\"],[9],[1,[22,1,[\"description\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n        \\n        \"],[10],[0,\"\\n        \"],[7,\"td\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"btn\"],[9],[0,\"\\n             \"],[7,\"button\"],[11,\"class\",\"btn btn-light\"],[11,\"id\",\"buttonSpace\"],[11,\"type\",\"button\"],[9],[0,\" \"],[7,\"i\"],[11,\"class\",\"fa fa-pencil-square-o\"],[9],[10],[0,\"Edit\"],[10],[0,\"\\n             \"],[7,\"button\"],[11,\"class\",\"btn btn-danger\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"removeClick\",[22,1,[\"id\"]]],null]],[11,\"type\",\"button\"],[9],[7,\"i\"],[11,\"class\",\"fa fa-trash-o \"],[9],[10],[0,\"Remove\"],[10],[0,\"\\n             \\n             \"],[10],[0,\"\\n       \"],[10],[0,\"\\n     \"],[10],[0,\"\\n      \\n\"]],\"parameters\":[1,2]},null],[10],[0,\"\\n\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/components/task-list/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/pods/posts/route", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("emb-app/pods/posts/template", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "BaodCqDP",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"task\"],[9],[0,\" \\n\"],[7,\"h1\"],[9],[0,\"Ember To Do List\"],[10],[0,\"\\n\\n\"],[1,[21,\"add-task\"],false],[0,\"\\n\\n\"],[1,[21,\"task-list\"],false],[0,\"\\n\"],[1,[21,\"edit-task\"],false],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[1,[21,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "emb-app/pods/posts/template.hbs"
    }
  });

  _exports.default = _default;
});
;define("emb-app/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("emb-app/router", ["exports", "emb-app/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('posts');
    this.route('login', {
      path: "Home"
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("emb-app/serializers/post", ["exports", "ember-data"], function (_exports, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = _emberData.default.RESTSerializer.extend({
    normalizeFindAllResponse(store, primaryModelClass, payload) {
      payload = {
        posts: payload
      };
      return this._super(store, primaryModelClass, payload);
    }

  });

  _exports.default = _default;
});
;define("emb-app/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("emb-app/services/tasklist", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Service.extend({
    data: null,

    init() {
      this._super(...arguments);

      this.set('data', []);
    }

  });

  _exports.default = _default;
});
;

;define('emb-app/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("emb-app/app")["default"].create({"name":"emb-app","version":"0.0.0+dce260f9"});
          }
        
//# sourceMappingURL=emb-app.map
