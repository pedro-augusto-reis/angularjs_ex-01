angular.module("listaTelefonica").directive("uiTelefone",function(){
    return{
        require: "ngModel",
        link: function(scope, element, atributos, controller){
            var _formatTelefone = function(telefone){

                if(!controller.$viewValue) return telefone;

                telefone = telefone.replace(/[^0-9+]/g,"");

                if(telefone.length > 3){
                    telefone = telefone.substring(-1,0) + "(" + telefone.substring(0);
                }

                if(telefone.length > 3){
                    telefone = telefone.substring(0,3) + ")" + telefone.substring(3);
                }

                if(telefone.length > 9){
                    telefone = telefone.substring(0,9) + "-" + telefone.substring(9,13);
                }

                return telefone;
            };

            element.bind("keyup", function(){
                controller.$setViewValue(_formatTelefone(controller.$viewValue));
                controller.$render();
            });
        }
    };
});