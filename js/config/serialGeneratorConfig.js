/*
> config
>> está sendo utilizado no service serialGeneratorservice
 */

angular.module("listaTelefonica").config(function(serialGeneratorProvider){
    serialGeneratorProvider.setLength(5);
});