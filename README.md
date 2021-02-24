# Desafio Wiser Frontend

A aplicação foi hospedada na [Vercel](https://vercel.com/) e está disponível em: [wiser-front-challenge.cdias.dev](https://wiser-front-challenge.cdias.dev/)

A aplicação consiste em uma página de login de usuário. Para efetuar o login, o usuário precisa fornecer um e-mail válido e uma senha, por se tratar de um protótipo de testes, os dados do usuário não são validados e a requisição é enviada para um servidor de testes, que retorna aleatoriamente uma resposta de sucesso ou falha indepentende dos dados inseridos. O resultado é informado para o usuário por meio de um alerta na página.

## Como utilizar

Para instalar a aplicação basta:
- Clonar o repositório utilizando o comando ```git clone https://github.com/cdias900/wiser-front-challenge.git```
- Instalar as dependências utilizando o comando ```yarn install``` ou ```npm install``` na pasta do projeto;
- Iniciar o servidor de desenvolvimento utilizando o comando ```yarn dev```ou ```npm run dev```
- Abrir no navegador o endereço do servidor de desenvolvimento: [localhost:3000](http://localhost:3000)

## Tecnologias utilizadas

A aplicação foi escrito na linguagem [TypeScript](https://www.typescriptlang.org/) e utiliza o framework [NextJS](https://nextjs.org/), responsável pela renderização da página no servidor, também utiliza as bibliotecas [Styled Components](https://styled-components.com/) para a estilização dos componentes, [Redux](https://redux.js.org/) e [Redux Saga](https://redux-saga.js.org/) para o gerenciamento do [state](https://pt-br.reactjs.org/docs/state-and-lifecycle.html) da aplicação e [Axios](https://www.npmjs.com/package/axios) para as requisições HTTP.



