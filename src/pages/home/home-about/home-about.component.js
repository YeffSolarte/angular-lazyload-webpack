import template from './home-about.html';
import controller from './home-about.controller';

let homeAboutComponent = {
   template,
   controller
};

export default angular
   .module('home-about.component', [])
   .component('homeAbout', homeAboutComponent);