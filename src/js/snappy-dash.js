var Vue = require('vue');
var VueRouter = require('vue-router');

var Dashboard = require('./components/dashboard');
var Applications = require('./components/applications');
var Deployments = require('./components/deployments');
var Releases = require('./components/releases');
var Support = require('./components/support');

Vue.directive('filter-panel', require('./components/filter-panel'));

Vue.config.debug = true;
Vue.use(VueRouter);

var App = Vue.extend({});
var router = new VueRouter();

router.map({
    '/dashboard': {
      name: 'dashboard',
      component: Dashboard
    },
    '/applications': {
      name: 'applications',
      component: Applications
    },
    '/deployments': {
      name: 'deployments',
      component: Deployments
    },
    '/releases': {
      name: 'releases',
      component: Releases
    },
    '/support': {
      name: 'support',
      component: Support
    },
});

router.alias({
  '/': 'dashboard'
});

router.start(App, 'body');
