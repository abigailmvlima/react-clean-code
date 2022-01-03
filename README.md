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