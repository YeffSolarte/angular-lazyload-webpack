'use strict';

function homeRouting($urlRouterProvider, $stateProvider) {
   $urlRouterProvider.otherwise('/home');

   $stateProvider
      .state('home', {
         url: '/home',
         template: '<home></home>',
         resolve: {
            loadHomeComponent: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
               return $q((resolve) => {
                  require.ensure([], () => {
                     // load whole module
                     let module = require('./home').default;
                     $ocLazyLoad.load({name: 'home'});
                     resolve(module.controller);
                  });
               });
            }]/*,
            loadHomeService:['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
               return $q((resolve) => {
                  require.ensure([], () => {
                     // load whole module
                     let module = require('./home.service').default;
                     console.log('module');
                     console.log(module);
                     $ocLazyLoad.load({name: 'home.service'});
                     resolve(module.service);
                  });
               });
            }]*/
         }
      })
      /*.state('home', {
         url: '/home',
         template: require('./views/home.html'), // include small templates into routing configuration
         controller: 'HomeController as vm',
         resolve: {
            loadHomeController: ($q, $ocLazyLoad) => {
               return $q((resolve) => {
                  require.ensure([], () => {
                     // load whole module
                     let module = require('./home').default;
                     $ocLazyLoad.load({name: 'home'});
                     resolve(module.controller);
                  });
               });
            }
         }
      })*/
      .state('home.about', {
         url: '/about',
         template: '<home-about></home-about>',
         resolve: {
            loadHomeAboutComponent: ['$q', '$ocLazyLoad', ($q, $ocLazyLoad) => {
               return $q((resolve) => {
                  require.ensure([], () => {
                     // load whole module
                     let module = require('./home-about/home-about').default;
                     $ocLazyLoad.load({name: 'home-about'});
                     resolve(module.controller);
                  });
               });
            }]
         }
      });
}

export default angular.module('home.routing', []).config(homeRouting);
