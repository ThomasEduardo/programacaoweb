angulaAppModulo.controller('alunoController', function (AlunoService, EscolaService, $scope, $state, $mdToast) {

    var TAMANHO_MINIMO_PESQUISA = 3;

    // Select.
    $scope.escolas = []; // Verificar função de carregamento inicial (carregamentoInicial) do(s) campo(s) select(s).

    // Alunos da busca por nome do Aluno.
    $scope.alunos = [];

    $scope.adicionarAluno = function () {

        AlunoService.cadastrarAluno($scope.aluno)
            .then(function (response) {
                // Chamado quando a resposta contém status de sucesso.
                // Exibir toas com mensagem de sucesso ou erro.
                var toast = $mdToast.simple()
                    .textContent('Aluno(a) cadastrado(a) com sucesso.')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            })
            .catch(function (data) {
                // Handle error here
                var toast = $mdToast.simple()
                    .textContent('Problema no cadastro do Aluno.')
                    .position('top right')
                    .action('Ok')
                    .hideDelay(6000);
                $mdToast.show(toast);
            });
    };

    $scope.listarAlunos = function () {
        AlunoService.listarAlunos()
            .then(function (response) {
                $scope.alunos = response.data;
            });
    };

    $scope.pesquisarAlunoPorNome = function (nome) {

        console.log("Nome: " + nome);

        if (nome.length > TAMANHO_MINIMO_PESQUISA) {
            AlunoService.consultarAlunoByNome(nome)
                .then(function (response) {
                    $scope.alunos = response.data;
                });
        }
    };

    $scope.limparFormulario = function () {

        // Reinicializa as variáveis nome e alunos.
        $scope.nome = "";
        angular.copy({}, $scope.alunos);

        // Reinicializa o estado do campo para os eventos e validação.
        // É necessário indicar o atributo name no formulário <form>
        $scope.formPesquisa.$setPristine();
        $scope.formPesquisa.$setValidity();
    }


    // Carregamento do(s) campo(s) select(s).
    carregamentoInicial = function () {

        // Escola.
        EscolaService.getEscolas()
            .then(function (response) {
                // Escolas que serão exibidas na página.
                $scope.escolas = response.data;
            });
    }

    carregamentoInicial();
});