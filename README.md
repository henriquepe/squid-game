# Jogo da Lula

Esse desafio é uma simulação do Jogo da Lula - um desafio competitivo pela sobrevivência, onde os sobreviventes dividem uma grande quantia em dinheiro

## Regras

O jogo começa com 69 jogadores, cada jogador possui um prêmio de $420,000. sempre que um jogador e eliminado do jogo, seu prêmio é somado aos fundos do prêmio.

O jogo é jogado em rodadas, e todos os jogadores devem participar. Toda rodada, cada jogador tem 42% de chances de ser eliminado.

No final de cada rodada, os jogadores restantes vão votar se o jogo deve ser encerrado, o jogo é encerrado se mais de 50% dos participantes optem pelo encerramento ou se nao sobram jogadores restante. Quando o jogo é encerrado, o total dos fundos do prêmio é distribuido igualmente entre os jogadores restantes.

Durante a votação, cada jogador tem uma probabilidade percentual calculada de votar Sim ou Não. A chance de um jogador optar pelo fim do jogo e de 30%

## Desafio

Crie uma ferramenta visual para simular o Jogo da Lula.

### Inicialização

Para iniciar o jogo, o App deverá, a partir da pagina Home, disponilizar um botao "Iniciar" que redirecionara para pagina do Jogo. Inicialize o jogo com 69 jogadores randomicos.

### Jogo

Crie um botão para iniciar cada round do jogo. O App deve exibir a lista de jogadores remanescentes, o fundo do prêmio atual, a lista de jogadores eliminados, o número de rodadas jogadas e o numero de votos pelo fim do jogo da rodada anterior (deve exibir 0 caso seja a primeira rodada). Essas informaçoes sobre o jogo devem estar visivel durante todo o tempo.

Ao final de cada round do jogo, o App deve exibir um botão para iniciar a votação. O voto individual de cada participante deve ser apresentando.

### Final

O App deve disponibilizar um botão que redireciona para a Home Page.

## Figma

Interface: https://www.figma.com/file/BXMmS1kSSjln9psMuudPgo/Jogo-da-Lula?type=design&mode=dev

Protótipo interativo: https://www.figma.com/proto/BXMmS1kSSjln9psMuudPgo/Jogo-da-Lula?page-id=0%3A1&type=design&node-id=16-153&viewport=238%2C146%2C0.22&scaling=scale-down&starting-point-node-id=4%3A14&mode=design

Obs: Você pode precisar se cadastrar na plataforma do Figma para conseguir baixar os assets do projeto

### Bonus

- Tocar `red-light-sound.mp3` toda vez que uma rodada comecar.
- Tocar `main-theme.mp3` quando um novo jogo iniciar.

## Dependências

Este projeto tem as seguintes dependências:

@emotion/react: https://emotion.sh/docs/@emotion/react
@emotion/styled: https://emotion.sh/docs/@emotion/styled
@testing-library/jest-dom: https://testing-library.com/docs/ecosystem-jest-dom
@testing-library/react: https://testing-library.com/docs/react-testing-library/intro
@testing-library/user-event: https://testing-library.com/docs/ecosystem-user-event
@types/jest: https://www.npmjs.com/package/@types/jest
@types/node: https://www.npmjs.com/package/@types/node
@types/react: https://www.npmjs.com/package/@types/react
@types/react-dom: https://www.npmjs.com/package/@types/react-dom
md5: https://www.npmjs.com/package/md5
react: https://reactjs.org/docs/getting-started.html
react-dom: https://reactjs.org/docs/react-dom.html
react-router-dom: https://reactrouter.com/web/guides/quick-start
react-scripts: https://create-react-app.dev/docs/getting-started/
typescript: https://www.typescriptlang.org/docs/
web-vitals: https://web.dev/vitals/
@babel/plugin-transform-runtime: https://babeljs.io/docs/en/babel-plugin-transform-runtime
@babel/preset-env: https://babeljs.io/docs/en/babel-preset-env
@babel/preset-react: https://babeljs.io/docs/en/babel-preset-react
@emotion/jest: https://emotion.sh/docs/@emotion/jest
@testing-library/react-hooks: https://react-hooks-testing-library.com/

## Iniciando o Projeto

Siga as etapas abaixo para iniciar o projeto:

### Instale as dependências com YARN:

```
yarn
```

## Executando Testes Unitários

Para executar os testes unitários, use o script test que já está configurado.

```
yarn test
```

## Estrutura de Pastas

### global:

Centraliza arquivos de configuração global, como cores, textos, tipos globais, etc.

### components:

Centraliza componentes que podem ser utilizados em mais de um lugar dentro da aplicação, seus devidos testes unitários e possíveis hooks próprios.

### pages:

Centraliza as páginas da aplicação, seus devidos testes unitários e possíveis hooks próprios.

**Todas estas pastas estão dentro de uma pasta de nome src.**
**Na raiz existe uma pasta de nome types onde é centralizado as definições de tipos que precisaram de alguma customização ou extensão.**

## Hook Pattern

Para aproveitar a arquitetura MVC, utilizamos o `hook pattern`. Esse padrão envolve a abstração de toda a lógica de controle e estado dentro do hook, cumprindo a função do Model e do Controller em paradigmas diferentes.
O componente em si busca atender ao conceito da VIEW, que é basicamente a interface do usuário, sem a responsabilidade de controle de estado e lógica. Dessa forma, alinhamos os benefícios da arquitetura MVC com as particularidades do desenvolvimento em React.
