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

```bash
npm i
## backend start
cd app/backend
npm run dev
## frontend start
cd app/frontend
npm start
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

<details>
<summary><strong>🐳 Configuração Docker</strong></summary><br />

  ### Docker e Docker-compose

  ⚠ O seu docker-compose precisa estar na versão 1.29 ou superior.  ⚠
[Veja aqui a documentação para atualizar o docker-compose.](https://docs.docker.com/compose/install/)

⚠️ **Crie os arquivos dockerfile:**

  - As pastas `frontend/` e `backend/` devem possuir um arquivo `Dockerfile` cada, configurados corretamente para a aplicação começar a rodar. Sem essa etapa concluída o _docker-compose_ não irá funcionar.
  - ⚠ Procure usar as boas práticas no _Dockerfile_. Para isso lembre-se dos casos de uso dos comandos [**RUN**, **ENTRYPOINT** e **CMD**.](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/da25fd46-8818-4234-8603-a442b047370f/lesson/93c74629-1ea8-4fbd-9c2a-5db417249348)

⚠️ **Atenção:**

- Seu projeto vai conter um arquivo `docker-compose.yml` que será utilizado pelo avaliador para realizar o _build_ da aplicação, você **não** deve alterá-lo ou excluí-lo.
- O arquivo `docker-compose.yml` também pode ser utilizado para executar a aplicação na sua máquina local, para isso é necessário executar o comando `npm run compose:up` na raiz do projeto.
- Recomendamos que enquanto desenvolve o projeto prefira o usar o comando `npm run compose:up:dev` pois, diferente do comando anterior, este comando está configurado para compartilhar volumes com o _docker_ e também utiliza o _script_ que realiza o _live-reload_ ao fazer modificações no _back-end_. Somente quando instalar uma nova dependência ou alterar algum arquivo na raiz do backend, você deverá realizar o re-build do seu compose, pois o volume está mapeando somente alterações dentro da pasta `src`. Você pode verificar essas configurações explorando o arquivo `docker-compose.dev.yml` e comparar com `docker-compose.yml`
- Obs.: Se você quiser fazer o build da sua aplicação usando o `docker-compose.dev.yml`, você pode usar o comando: `npm run compose:up:dev -- --build`.

>  👀 **De olho na dica:**
> Lembre-se, você pode revisitar os conteúdos sobre Docker:
> - [Comandos básicos do Docker](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/a852c0dd-0602-4357-88e8-707352e97927/lesson/0ad2e27d-e6d6-459d-8f1b-ad8ddc7ca046)
> - [Criando nossa primeira imagem Docker](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/da25fd46-8818-4234-8603-a442b047370f/lesson/822be635-e9da-4b46-8042-cbf537013935)
> - [Criando nosso primeiro arquivo Compose](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/1ad977dd-5f74-4ff0-a2db-119b30242d32)
</details>

---

Desenvolvido por [Wayne Takahashi](https://www.linkedin.com/in/wayne-takahashi/), © 2022.
