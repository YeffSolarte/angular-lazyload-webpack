import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import dragular from './shared/dragular/dragular';
import ocLazyLoad from 'oclazyload';

console.log('--- dragular ---');
console.dir(dragular);

let appLibraries = angular.module('app.libraries', [
      uiRouter,
      uiBootstrap,
      dragular.name,
      // It's a hack! https://github.com/ocombe/ocLazyLoad/issues/179
      (() => {
         return ocLazyLoad;
      })()
   ]);

export default appLibraries;
   
