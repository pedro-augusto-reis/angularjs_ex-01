angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $filter, uppercaseFilter, contatosAPI, checkApi, resolveContatos) {

    $scope.app = "Lista Telefônica";
    // uma forma mais performática de se aplicar os filter é utilizar ele nos controllers
    // $scope.contatos = [
    // 	{nome: uppercaseFilter("Pedro"), telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "blue"},
    // 	{nome: $filter('uppercase')("Pedro"), telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cor: "blue"}];

    $scope.contatos = resolveContatos.data;

    var init = function () {
        apiStatus();
        calcularImpostos($scope.contatos);
    }

    var calcularImpostos = function (contatos) {
        contatos.forEach(function (contato) {
            contato.operadora.precoComImpostos = contato.operadora.preco * 1.2;
        });
    }

    $scope.apagarContato = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if (!contato.selecionado) return contato;
        });
        $scope.verificarContatoSelecionado($scope.contatos);
    };

    $scope.verificarContatoSelecionado = function (contatos) {
        $scope.hasContatoSelecionado = contatos.some(function (contato) {
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    var apiStatus = function () {
        checkApi.verificarServico()
            .then(function () {
                $scope.apiStatus = false;
            })
            .catch(function () {
                $scope.apiStatus = true;
            });
    };

    init();
});