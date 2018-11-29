angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, resolveContato) {
    $scope.contato = resolveContato.data;
});