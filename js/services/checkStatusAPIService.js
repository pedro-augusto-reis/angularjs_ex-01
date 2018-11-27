angular.module("listaTelefonica").factory("checkApi", function($http,config){
    var _verificarServico = function(){
        return $http.get(config.baseUrl + "/serviceCheck");
    }

    return{
        verificarServico: _verificarServico
    }
});