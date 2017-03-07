angular.module('app', ['ngRoute'])
.config(($routeProvider) => {
  $routeProvider
  .when('/todo', {
    templateUrl: 'todo/todo.template.html',
    controller: 'todo'
  })
  .otherwise('/todo')
})
