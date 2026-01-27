## 🍽️ Restaurant Orders API
Esta API foi desenvolvida para gerenciar o fluxo de pedidos de um restaurante, permitindo o controle de produtos, clientes, disponibilidade de mesas e o status de cada pedido de forma eficiente, utilizando uma arquitetura robusta e tipos estáticos.

## 👩‍💻 Aprendizados
Durante o desenvolvimento do "api-restaurant", aprendi e apliquei vários conceitos fundamentais para projetos web backend modernos. Alguns dos principais aprendizados incluem:

--> 1. Desenvolvimento com TypeScript: Implementação de tipagem estática em toda a aplicação, garantindo maior segurança no fluxo de dados, autocompletar eficiente e redução de erros em tempo de execução.

--> 2. Query Builder com Knex.js: Construção de queries SQL de forma programática, facilitando a manutenção do código, além da gestão de Migrations para controle de versão do esquema do banco de dados.

--> 3. Modelagem de Dados e Relacionamentos: Estruturação de tabelas no banco de dados (ex: disponibilidade das mesas, status, pedidos, entre outros) e tratamento de relacionamentos Many-to-Many e One-to-Many.

--> 4. Manipulação de Banco de Dados: Prática com operações CRUD avançadas, filtros de busca e persistência de dados de forma escalável e organizada.

## 💻 Estrutura do Projeto
SUPPORT-TICKETS-PROJECT hadirday_project 
├── node_modules/         # Dependências (ignorado pelo Git) 
├── src/                  # Código fonte do backend 
├── .gitignore 
├── knexfile              # Configurações do Query Builder para instruções SQL
├── package-lock.json
├── package.json
├── README.md
├── requests_insomia      # Requisições do Insomia para teste da API
└── tsconfig.json         # Configurações do Typescript

## 💾 Pré Requisitos
--> Node.js (versão [v22.17.0]) 
--> npm ou yarn (Gerenciador de pacotes) 
--> Insomnia ou Postman (Para testar os endpoints da API)

## 🚀 Como Rodar
Esta API utiliza Node.js, TypeScript e Knex.js para gerenciar os pedidos do restaurante.

--> Instalação Clone o repositório e instale as dependências.

--> Banco de Dados: Execute as migrations para criar as tabelas do sistema (npm run knex migrate:latest).

--> Inicie o servidor Backend (npm run dev).

--> Use o Insomnia ou Postman para testar as requisições da API (GET, POST, PUT, DELETE, PATCH).

## 🛠️ Testes da API com Insomnia
--> Localize o arquivo de coleção, "requests_insomia".

--> Importe no Insomnia

--> Selecione o arquivo "requests_insomia".

--> Todas as requisições na coleção estão configuradas para a URL padrão: http://localhost:[Sua Porta].

## ⚙️ Tecnologias
Esse projeto foi desenvolvido usando as seguintes tecnologias:

--> Node.js
--> TypeScript
--> Knex.js (Query Builder)
--> SQL (Banco de Dados)
--> GIT E Github
