import template from './home.html';
import controller from './home.controller';

let homeComponent = {
   template,
   controller,
   bindings: {
      message: '<?'
   }
};

export default angular
   .module('home.component', [])
   .component('home', homeComponent);
