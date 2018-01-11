(function () {

  var app = angular.module('app');
  app.controller('listaTelefonicaController', listaTelefonicaController);
  listaTelefonicaController.$inject = ['$scope', '$filter'];

  function listaTelefonicaController($scope, $filter) {
    var vm = $scope;

    vm.message = "Lista Telefônica";

    vm.contatos = [
      { nome: $filter("uppercase")("Pedro"), data: new Date(), telefone: "9999-9999", cor: 'red' },
      { nome: "Sami", data: new Date(), telefone: "8888-9999", cor: 'green' },
      { nome: "Elson", data: new Date(), telefone: "8877-9977", cor: 'yellow' }
    ];
    vm.operadoras = [
      { nome: "Vivo", codigo: 14, categoria: "Celular", preco: 2},
      { nome: "Oi", codigo: 15, categoria: "Celular", preco: 1},
      { nome: "Claro", codigo: 13, categoria: "Fixo", preco: 3},
      { nome: "Tim", codigo: 13, categoria: "Fixo", preco: 4}
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

      vm.contatos.push(angular.copy(c)); //Forma 3: a melhor de se usar junto ao angular.copy
      delete vm.c;
      vm.contatoForm.$setPristine();
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

    vm.ordenarPor = function (campo) {
      vm.campoParaOrdenacao = campo;
      vm.direcaoOrdenacao = !vm.direcaoOrdenacao; // Recebe ele mesmo por ser inicialmente == undefined que é igual a false
    };

  }


})();

