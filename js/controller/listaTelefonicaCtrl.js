angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, uppercaseFilter, contatosAPI, operadorasAPI, serialGenerator) {

    $scope.app = "Lista Telefônica";
    // uma forma mais performática de se aplicar os filter é utilizar ele nos controllers
    // $scope.contatos = [
    // 	{nome: uppercaseFilter("Pedro"), telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "blue"},
    // 	// {nome: $filter('uppercase')("Pedro"), telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "blue"},
    // 	{nome: "Ana", telefone: "99998877", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"},cor: "green"},
    // 	{nome: "Maria", telefone: "99998866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"},cor: "red"}
    // ];

    $scope.contatos = [];
    $scope.operadoras = [];

    $scope.classe1 = "selecionado";
    $scope.classe2 = "negrito";

    $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contatosAPI.saveContato(contato)
            .then(function(response){
                delete $scope.contato;
                $scope.contatoForm.$setPristine();
                carregarContatos(); //$scope.contatos = response.data;
            });
    };

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

    var carregarContatos = function(){
        contatosAPI.getContatos()
            .then(function (response) {
                $scope.contatos = response.data;
            });
    };

    var carregarOperadoras = function(){

            operadorasAPI.getOperadoras().then(function (response) {
                $scope.operadoras = response.data;
            })
            .catch(function(error){
                $scope.message = "Aconteceu um problema.";
                console.log('aqui');
                console.log(error);
            });
    };

    carregarContatos();
    carregarOperadoras();

});