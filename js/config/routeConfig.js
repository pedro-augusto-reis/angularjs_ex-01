angular.module("listaTelefonica").config(function ($routeProvider) {
    $routeProvider
        .when("/contatos", {
            templateUrl: "view/contatos.html",
            controller: "listaTelefonicaCtrl"
        });

    $routeProvider
        .when("/accordion", {
            templateUrl: "view/accordion.html"
        });

    $routeProvider
        .when("/novoContato", {
            templateUrl: "view/novoContato.html",
            controller: "novoContatoCtrl",
            resolve: {
                resolveOperadoras: function (operadorasAPI) {
                    return operadorasAPI.getOperadoras();
                }
            }
        });

    $routeProvider
        .when("/detalhesContato/:id", {
            templateUrl: "view/detalhesContato.html",
            controller: "detalhesContatoCtrl",
            resolve:{
                resolveContato: function(contatosAPI, $route){
                    return contatosAPI.getContato($route.current.params.id);
                }
            }
        });

    $routeProvider.otherwise({
        redirectTo: "/contatos"
    });

    $routeProvider
        .when("/error", {
            templateUrl: "view/error.html"
        });
});