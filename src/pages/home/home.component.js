let homeComponent = {
   template: `
      <h1>I'm fucking home</h1>

      <button ng-click="$ctrl.callService()">Call Service</button>
   `,
   controller: ['$ocLazyLoad', '$injector', function ($ocLazyLoad, $injector) {
      this.callService = () => {
         $ocLazyLoad.load({
            name: 'home.service'
         }).then(() => {
            //$injector.get('HomeService');
            console.log(`$injector.get('HomeService')`);
            console.log($injector.get('HomeService'));
         })
      };
   }]
};

export default angular
   .module('home.component', [])
   .component('home', homeComponent);
