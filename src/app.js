'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import dragular from './commons/dragular/dragular';

import homeRouting from './pages/home/home.routing';
import messagesRouting from './pages/messages/messages.routing';

import ocLazyLoad from 'oclazyload';

export default angular
   .module('lazyApp', [
      uiRouter,
      uiBootstrap,
      dragular.name,
      // @TODO: It's a hack! https://github.com/ocombe/ocLazyLoad/issues/179
      (() => {
         /*require('oclazyload');
         return 'oc.lazyLoad'*/
         return ocLazyLoad;
      })(),
      /*
       uncomment to move msg-store to bundle.js only instead
       of putting it in both: 3.bundle.js and 4.bundle.js
       */
      //require('commons/msg-store').name,
      /*require('./pages/home/home.routing').name,
      require('./pages/messages/messages.routing').name*/
      homeRouting.name,
      messagesRouting.name
   ]).config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
      $ocLazyLoadProvider.config({
         debug: true
      });
   }]);
