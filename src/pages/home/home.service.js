class HomeService {
   constructor() {

   }

   doSomething() {
      console.log(`doing something`);
   }
}

export default angular
   .module('home.service', [])
   .service('HomeService', HomeService);