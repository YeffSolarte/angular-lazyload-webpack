'use strict';

import angular from 'angular';
import appModule from '../app';
//let appModule = require('../app');

angular.bootstrap(document, [appModule.name], { strictDi: true });
