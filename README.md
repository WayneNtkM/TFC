# TFC - Trybe Futebol Clube

Projeto fullstack Dockerizado realizado durante o curso da [Trybe](https://www.betrybe.com). Backend desenvolvido por mim e previmante Frntend pronto.
fora adicionado, ao frontend, páginas responsivas para aparelhos com tela de até 500px, por ora (ainda em desenvolvimento).

## Objective

É possível ao usuário fazer login, verificar as partidas e a classificação dos times. Além de ser possivél adicionar, terminar e modificar o placar de partidas.

## Tecnologias e Frameworks

<div>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express"/>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
    <img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL"/>
    <img src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue" alt="Sequelize"/>
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node"/>
    <img src='https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white' alt='ESlint' />
    <img src='https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' alt='CSS' />
    <img src='https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink' alt='JWT' />
    <img src='https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink' alt='Docker' />
</div>

<br />

Tecnologias divididas por arquivos.

### Front-end
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [ReactJs](https://beta.reactjs.org)
- [JavaScript](https://www.javascript.com)

### Back-end
- [TypeScript](https://www.typescriptlang.org)
- [Node.Js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Sequelize](https://sequelize.org)
- [MySQL](https://www.mysql.com)

### Linter
- [ESlint](https://eslint.org/)

## Getting Started

Primeiramente, clone o repositório:

    git clone git@github.com:WayneNtkM/TFC.git

Então, entre no diretório raiz:

    cd TFC

Instale as dempendências necessárias e suba a aplicação

    
    npm i
    ## backend start
    cd app/backend
    npm run dev
    ## frontend start
    cd app/frontend
    npm start
    

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

<details>
<summary><strong>🐳 Rodando com o Docker</strong></summary><br />

  ### Docker e Docker-compose

  ⚠ O seu docker-compose precisa estar na versão 1.29 ou superior.  ⚠
[Veja aqui a documentação para atualizar o docker-compose.](https://docs.docker.com/compose/install/)

⚠️ **Após clonar o repositório**
    
    cd TFC
    npm run compose:up ** comando responsável pelo build das imagens

    
</details>

---

Desenvolvido por [Wayne Takahashi](https://www.linkedin.com/in/wayne-takahashi/), © 2022.
