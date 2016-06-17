'use strict';

class HomeController {
   constructor($ocLazyLoad, $injector, $q) {
      this.callService = () => {
         $ocLazyLoad.inject({
            name: $q((resolve, reject) => {
               require.ensure([], () => {
                  // load whole module
                  let module = require('./home.service').default;
                  $ocLazyLoad.load({name: module.name}).then((promise) => {
                     resolve(promise[0]);
                  });
               })
            })
         }).then(() => {
            console.log(`$injector.get('HomeService')`);
            console.log($injector.get('HomeService'));
         })
      };


   }

   $onInit() {
      console.log('this');
      console.log(this);
   }


}

HomeController.$inject = ['$ocLazyLoad', '$injector', '$q'];

export default HomeController;

