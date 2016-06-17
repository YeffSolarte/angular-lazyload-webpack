class HomeService {

   constructor($ocLazyLoad, $injector, $q) {
      this.$ocLazyLoad = $ocLazyLoad;
      this.$injector = $injector;
      this.$q = $q;
   }

   doSomething() {
      console.log(`doing something`);
   }

   message() {
      return `I'm lazy loaded`;
   }

   getDragService() {
      let HomeDragService;

      return this.$q((resolve, reject) => {
         require.ensure([], () => {
            // load whole module
            let module = require('./home-drag.service').default;
            this.$ocLazyLoad.load({name: module.name}).then((promise) => {
               resolve(promise[0]);
            });
         })
      }).then(() => {
         return HomeDragService = this.$injector.get('HomeDragService');
      });


   }
}

export default angular
   .module('home.service', [])
   .service('HomeService', HomeService);