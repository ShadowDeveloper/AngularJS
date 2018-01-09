(function () {

  var app = angular.module('app');
  app.controller('listaTelefonicaController', listaTelefonicaController);
  listaTelefonicaController.$inject = ['$scope'];

  function listaTelefonicaController($scope) {
    var vm = $scope;

    vm.message = "Lista Telefônica";

    vm.contatos = [
      { nome: "Pedro", telefone: "9999-9999", cor: 'red' },
      { nome: "Sami", telefone: "8888-9999", cor: 'green' },
      { nome: "Elson", telefone: "8877-9977", cor: 'yellow' }
    ];
    vm.operadoras = [
      { nome: "Vivo", codigo: 14, categoria: "Celular" },
      { nome: "Oi", codigo: 15, categoria: "Celular" },
      { nome: "Claro", codigo: 13, categoria: "Fixo" },
      { nome: "Tim", codigo: 13, categoria: "Fixo" }
    ];

    vm.adicionarContato = function (c) {
      //vm.adicionarContato = function(nome, telefone){ //Forma 2 

      // vm.contatos.push({
      //   nome: vm.peopleName,
      //   telefone: vm.peopleTel
      // }); //Forma 1: ruim de se fazer. Temos que ler o scope dentro do controller toda vez.

      //vm.contatos.push({
      // nome: nome,
      // telefone: telefone
      //}); //Forma 2: forma mediana de se fazer. Ainda existe burocracia para criação do objeto. Existe maneira melhor com o proprio angularjs para se fazer

      vm.contatos.push(angular.copy(c));
      delete vm.c;
      //Forma 3: a melhor de se usar junto ao angular.copy

      console.log(c);
    }


    vm.apagarContato = function (contatos) {
      vm.contatos = contatos.filter(function (contato) {
        if (!contato.selecionado) return contato;
      });
    }

    vm.isContatoSelecionado = function (contatos) {
      return contatos.some(function (contato) {
        return contato.selecionado;
      });
    };
  }

})();

