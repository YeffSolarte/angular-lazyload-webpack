'use strict';

class HomeController {
   constructor($ocLazyLoad, $injector) {
      /*this.callService = () => {
         $ocLazyLoad.load({
            name: 'home.service'
         }).then(() => {
            console.log(`$injector.get('HomeService')`);
            console.log($injector.get('HomeService'));
         })
      };*/
   }

   $onInit() {

   }
}

HomeController.$inject = ['$ocLazyLoad', '$injector'];

export default angular
   .module('home.controller', [])
   .controller('HomeController', HomeController);

