'use strict';

class HomeController {
   constructor($ocLazyLoad, $injector, $q, $uibModal) {

      this.callService = () => {

         return $q((resolve, reject) => {
            require.ensure([], () => {
               // load whole module
               let module = require('./home.service').default;
               $ocLazyLoad.load({name: module.name}).then((promise) => {
                  resolve(promise[0]);
               });
            })
         }).then(() => {
            this.HomeService = $injector.get('HomeService');
            this.message = this.HomeService.message();
         });

      };

   }

   $onInit() {

   }

   getDragService() {
      console.log('this.HomeService.getDragService()');
      console.log(this.HomeService.getDragService());
      this.HomeService.getDragService();
   }


}

HomeController.$inject = ['$ocLazyLoad', '$injector', '$q'];

export default HomeController;

