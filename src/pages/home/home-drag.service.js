class HomeDragService {

   constructor() {

   }

   drag() {
      console.log(`drag something`);
   }

}

export default angular
   .module('home.drag.service', [])
   .service('HomeDragService', HomeDragService);