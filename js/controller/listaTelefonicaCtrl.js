angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, uppercaseFilter, contatosAPI, operadorasAPI, serialGenerator, checkApi) {

    $scope.app = "Lista Telefônica";
    // uma forma mais performática de se aplicar os filter é utilizar ele nos controllers
    // $scope.contatos = [
    // 	{nome: uppercaseFilter("Pedro"), telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "blue"},
    // 	{nome: $filter('uppercase')("Pedro"), telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "blue"}];

    $scope.contatos = [];
    $scope.operadoras = [];

    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";

    $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
    };

    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato){
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    var apiStatus = function(){
        checkApi.verificarServico()
            .then(function(response){
               $scope.apiStatus = false;
            })
            .catch(function(response){
                $scope.apiStatus = true;
            });
    };

    var carregarContatos = function(){
        contatosAPI.getContatos()
            .then(function (response) {
                $scope.contatos = response.data;
            });
    };

    apiStatus();
    carregarContatos();
});