/*
> sendo utilizado em index.html
 */
angular.module("listaTelefonica").directive("uiAlert", function(){
   return {
      templateUrl: "view/alert.html",
       replace: true,
       restrict: "E",
       scope: {
          title: "@title", //ou title: "@" por serem o mesmo nome
          error: "=message" //two-way biding
      },
       transclude: true // faz com que a mensagem abaixo não seja substituída, index.html e alert.html
       /*
        <ui-alert title="Ops, aconteceu um problema!" message="error">
        Não foi possível carregar os dados
        </ui-alert>
       */
   };
});

/*
Tipos de restrição (utilizado no index.html):
A - diretiva restrita ao atributo do elemento
  <div alert></div>

E - diretiva restrita ao elemento
  <alert></alert>

C - diretiva restrita a classe do elemento
  <div class="alert"></div>

M - diretiva restrita ao comentário do elemento
  <!-- directive: alert-->
  <div></div>
 */

/*
Cria um escopo isolado, realizando uma mediação
 */