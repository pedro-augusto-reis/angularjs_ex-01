angular.module("listaTelefonica").config(function($routeProvider){
    $routeProvider
        .when("/contatos",{
            templateUrl: "view/contatos.html",
            controller: "listaTelefonicaCtrl"
        });

    $routeProvider
        .when("/accordion",{
            templateUrl: "view/accordion.html"
        });
});