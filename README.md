# Tipos de Dados
    - string  = 'nome'
    - number  = 1234
    - boolean = true ou false
    - date    = new Date()
    - array   = []      // exemplo de lista - um array ele é composto por um conjunto de dados seja um objeto que é um {} ou uma classe ou um numero ou uma '' ou um valor booleano que é true ou false

    [6,35,42] - array de numero
    [{title:'Davi'}, {title: 'Elio'}, {title: 'Bi'}] - array de objeto

    https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows



# Tipos de funções

    - Arrow Function

        const nomedafuncao = (params) => {
            return valorderetorno
        }

    
    - Function generator

        function* nomedafuncao(params) {
            return valordafuncao
        }


# pega valor do estado global, tras todos os reducers 
    
    const state = yield store.getState() 


# Este comando serve para previnir caso haja algum tipo de erro ele executa a parte do catch

    try {
        ...conteudo do codigo
	} catch (error) {
        console.log(error)
    }

# Reducer
    É o estado da aplicacao, onde e possivel guardar os dados e manipulalos podendo ser acessivel de qualquer lugar da aplicacao ou sistema.
    Os dados podem ser recuperados atraves do hook chamado userSelector() que faz parte do pacote importado react-redux.

# Sagas
    e conhecido como redux, que tem como funcionalidade o gatilho por monitoramento de chaves para executar tarefas em segundo plano. 

# Sobre o import
    quando for importar um arquivo local em .js e o mesmo nao conter o export default e conter apenas export const no meio do codigo.
    realizar a importacao utilizando o * as - import * as nomeDeUtilizacao from 'enderecoDoArquivo'