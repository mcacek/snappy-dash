const Vue = require('vue');
const VueRouter = require('vue-router');

const Dashboard = require('./components/dashboard');
const Applications = require('./components/applications');
const Deployments = require('./components/deployments');
const Releases = require('./components/releases');
const Support = require('./components/support');

Vue.directive('filter-panel', require('./components/filter-panel'));

Vue.config.debug = true;
Vue.use(VueRouter);

const App = Vue.extend({});
const router = new VueRouter();

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
