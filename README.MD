# 📚  API Bookstore  📚

### Descrição

-   Projeto desenvolvido para o módulo 4 do curso Desenvolvimento Web Full Stack da Resilia.
-   O projeto se resume em uma API REST para interagir com o banco de dados de uma livraria.
-   As principais características do projeto são :
    -   o uso do padrão REST, com os verbos referentes ao protocolo HTTP;
    -   o uso do padrão DAO ou de ORM para interagir com o banco de dados - optamos por utilizar o ORM Sequelize e o banco de dados SQLite.;
    -   Utilização do padrão MVC.
    
### Como utilizar a API.

-   Será necessário ter instalado em sua máquina a versão 16.14.0 do NodeJS, o VSCode e o Insomnia;
    
-   Faça clone do seguinte repositório:
    
    `git clone https://github.com/ericrodrigues00/api-bookstore-resilia.git`
    
-   Abra o projeto no VSCode, abra o terminal e assegure-se que está na pasta correta. 
    
-   Instale as dependências
    
    `npm install uuid`
    `npm install sqlite3`
    `npm install express`
    `npm install sequelize`
    
    
-   Inicie o projeto
    
    `npm run dev`

### Visualizando o banco de dados com Beekeeper

Caso queira observar as alterações no banco de dados, a aplicação open-source Beekeeper é uma opção.

-   Disponível para download em:  `https://www.beekeeperstudio.io/`

Após a instalação:

-   Select a connection type: sqlite
-   database file: Procurar a pasta do projeto e seleciona o arquivo dev.sqlite
-   Nomear e salvar
-   Rodar o servidor com npm run dev e recarregar no Beekeeper: a(s) entidade(s) deve(m) aparecer lá

### Estrutura da API: rotas possíveis

POST:

-   /adress (Cria um cadastro de um novo endereço. Deve passar o objeto no corpo da requisição. O id não é necessário pois é gerado automaticamente através da biblioteca uuid)

GET:

-   /adress (Lista todos os endereços cadastrados)
-   /adress/`:street_name`  (Lista endereços cadastrados que tenham a chave `street_name` semelhante ou igual a aquela passada como parâmetro)

PATCH:

-   /adress/`:id`  (Atualiza o  `street_name` de um endereço cadastrado. Deve passar o atributo no corpo da requisição, e o id como parâmetro)

DELETE:

-   /adress/`:id`  (Deleta um endereço do banco de dados. Deve passar o id do endereço como parâmetro)

### Exemplo de endpoint.
- Endpoint da requisição do cadastro de um endereço:
  ```js
  {
	"id": "c935a70f-6fb9-44c1-8b8b-b735e2e16f7b",
	"country": "Madagascar",
	"city": "Antananarivo",
	"street_name": "Av. de L'Independance",
	"number": 14
  }
  ```

### Tecnologias utilizadas


![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)


