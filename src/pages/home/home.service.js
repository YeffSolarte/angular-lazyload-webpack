class HomeService {

   constructor() {

   }

   doSomething() {
      console.log(`doing something`);
   }

   message() {
      return `I'm lazy loaded`;
   }
}

export default angular
   .module('home.service', [])
   .service('HomeService', HomeService);