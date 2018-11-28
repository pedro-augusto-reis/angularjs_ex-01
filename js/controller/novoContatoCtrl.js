angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $filter, uppercaseFilter, contatosAPI, serialGenerator, $location, resolveOperadoras) {

    $scope.operadoras = resolveOperadoras.data;

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContato(contato)
            .then(function(response){
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                $location.path("/contatos");
            });
    };
});