'use strict';

import angular from 'angular';
import appLibraries from './app.libraries';

import homeRouting from './pages/home/home.routing';
import messagesRouting from './pages/messages/messages.routing';

export default angular
   .module('lazyApp', [
      appLibraries.name,
      /*
       uncomment to move msg-store to bundle.js only instead
       of putting it in both: 3.bundle.js and 4.bundle.js
       */
      //require('commons/msg-store').name,
      homeRouting.name,
      messagesRouting.name
   ]).config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
      $ocLazyLoadProvider.config({
         debug: true
      });
   }]);
