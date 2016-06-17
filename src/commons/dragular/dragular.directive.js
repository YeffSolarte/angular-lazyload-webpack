dragularDirective.$inject = ['dragularService'];

function dragularDirective(dragularService) {
   'use strict';

   return {
      restrict: 'A',
      link: function($scope, iElm, iAttrs) {

         var options = $scope.$eval(iAttrs.dragular) || tryJson(iAttrs.dragular) || {};

         function tryJson(json) {
            try { // I dont like try catch solutions but I havent find sattisfying way of chcecking json validity.
               return JSON.parse(json);
            } catch (e) {
               return undefined;
            }
         }

         if(iAttrs.dragularModel){
            options = angular.extend({containersModel: $scope.$eval(iAttrs.dragularModel)}, options);
         }else if(options && options.containersModel && typeof options.containersModel === 'string'){
            options.containersModel = $scope.$eval(options.containersModel);
         }

         dragularService(iElm[0], options);
      }
   };

}

export default dragularDirective;