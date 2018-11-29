/*
> FACTORY
>> javascript factory
 */

angular.module("listaTelefonica").factory('contatosAPI', function($http, config){

    var _getContatos = function(){
        return $http.get(config.baseUrl + "/contatos");
    };

    var _getContato = function(id){
        return $http.get(config.baseUrl + "/contatos/" + id);
    };

    var _saveContato = function(contato){
        return $http.post(config.baseUrl + "/contatos", contato);
    };

    return {
        getContato: _getContato,
        getContatos: _getContatos,
        saveContato: _saveContato
    };
});