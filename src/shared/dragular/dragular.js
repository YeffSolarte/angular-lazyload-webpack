import angular from 'angular';
import dragularService from './dragular.service';
import dragularDirective from './dragular.directive';

let dragularModule = angular.module('dragularModule', [])
   .directive('dragular', dragularDirective)
   .factory('dragularService', dragularService);

export default dragularModule;