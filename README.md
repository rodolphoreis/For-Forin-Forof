**Performance em for, forIn e forOf**

Desenvolvi um projeto para comparar o desempenho de diferentes métodos de iteração em arrays: `for`, `forIn` e `forOf`. Os resultados mostram que o método `forOf` se destaca com uma performance excepcional de 0.012ms, enfatizando sua eficiência ao iterar diretamente sobre os elementos do array.

**Resultados dos Testes em Tempo**
- `For`: 0.102ms
- `ForIn`: 0.018ms
- `ForOf`: 0.012ms

**Resumo**
Ao explorar distintas abordagens, destaco a importância da escolha do método, evidenciando o `forOf` como uma opção notavelmente eficaz na otimização do tempo de execução. Na busca constante por excelência, cada milissegundo economizado representa uma conquista significativa.

**Ferramentas e Tecnologias Utilizadas**
- **Axios**: Biblioteca para requisições HTTP.
- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Criação do servidor HTTP.

**Estrutura do Código**
O código está organizado em módulos, com a funcionalidade principal em `service.js` para interagir com a API SWAPI. O comparador de desempenho está implementado em `index.js`. Cada método (`for`, `forIn`, `forOf`) é testado em relação ao tempo de execução, e os resultados são exibidos no console.

**Como Executar o Código**
1. Certifique-se de ter o Node.js instalado.
2. Execute `npm install` para instalar as dependências.
3. Execute `node index.js` para realizar os testes e visualizar os resultados.

**Repositório no GitHub**
[https://github.com/rodolphoreis/For-Forin-Forof.git](https://github.com/rodolphoreis/For-Forin-Forof.git)
