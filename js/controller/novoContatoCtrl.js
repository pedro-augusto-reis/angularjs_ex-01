angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, $filter, uppercaseFilter, contatosAPI, operadorasAPI, serialGenerator, $location) {

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContato(contato)
            .then(function(response){
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                $location.path("/contatos");
            });
    };

    var carregarOperadoras = function(){
        operadorasAPI.getOperadoras()
            .then(function (response) {
                $scope.operadoras = response.data;
            })
            .catch(function(){
                $scope.error = "Aconteceu um problema.";
            });
    };
    carregarOperadoras();
});