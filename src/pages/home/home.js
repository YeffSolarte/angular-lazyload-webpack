'use strict';

import HomeController from './controllers/home.controller';
import HomeAboutController from './controllers/home.about.controller';

export default angular
   .module('home', [
      HomeController.name,
      HomeAboutController.name
   ]);
