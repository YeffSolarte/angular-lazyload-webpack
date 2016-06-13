let path = require('path'),
    nodeModulesDir = path.join(__dirname, './node_modules');

let deps = [
   'angular/angular.min.js'
];

var config = {
   entry: {
      app: ['./src/core/bootstrap.js']
   },
   output: {
      path: __dirname + '/build/',
      filename: 'bundle.js'
   },
   resolve: {
      alias: {},
      root: __dirname + '/src/'
   },
   module: {
      noParse: [],
      loaders: [
         {test: /\.js$/, exclude: /node_modules/, loader: 'ng-annotate!babel'},
         {test: /\.html$/, loader: 'raw'}
      ]
   }
};

/*deps.forEach(function (dep) {
   let depPath = path.resolve(nodeModulesDir, dep);
   config.resolve.alias[dep.split(path.sep)[0]] = depPath;
   config.module.noParse.push(depPath);
});*/

module.exports = config;
