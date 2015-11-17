var Vue = require('vue');
var VueRouter = require('vue-router');

var Dashboard = require('./components/dashboard');
var Applications = require('./components/applications');
var Deployments = require('./components/deployments');
var Releases = require('./components/releases');
var Support = require('./components/support');

Vue.config.debug = true;
Vue.use(VueRouter);

var App = Vue.extend({});
var router = new VueRouter();

router.map({
    '/dashboard': {
        component: Dashboard
    },
    '/applications': {
        component: Applications
    },
    '/deployments': {
        component: Deployments
    },
    '/releases': {
        component: Releases
    },
    '/support': {
        component: Support
    },
});

router.alias({
  '/': '/dashboard'
});

router.start(App, '#l-base');
