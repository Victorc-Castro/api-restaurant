## 🍽️ Restaurant Orders API

[🇧🇷 Leia esta documentação em Português](./README.pt-BR.md)

This API was developed to manage a restaurant's order flow, allowing efficient control over products, customers, table availability, and order status, utilizing a robust architecture and static typing.

## 👩‍💻 Key Learnings
During the development of "api-restaurant," I applied several fundamental concepts for modern backend web projects. Key takeaways include:

--> TypeScript Development: Implementing static typing throughout the application to ensure greater data flow security, efficient autocomplete, and a reduction in runtime errors.

--> Query Building with Knex.js: Constructing SQL queries programmatically to simplify code maintenance, alongside using Migrations for database schema version control.

--> Data Modeling & Relationships: Structuring database tables (e.g., table availability, status, orders) and handling Many-to-Many and One-to-Many relationships.

--> Database Manipulation: Practical experience with advanced CRUD operations, search filters, and scalable data persistence.

## 💻 Project Structure
RESTAURANT-ORDERS-API

├── node_modules/ # Dependencies (ignored by Git) 

├── src/ # Backend source code 

├── .gitignore 

├── README.md 

├── README.pt-BR.md 

├── knexfile # Query Builder configuration for SQL instructions 

├── package-lock.json

├── package.json 

├── requests_insomnia # Insomnia collection for API testing 

└── tsconfig.json # TypeScript configuration

## 💾 Prerequisites

--> Node.js (version [v22.17.0])

--> npm or yarn (Package manager)

--> Insomnia or Postman (To test API endpoints)

## 🚀 Getting Started

This API uses Node.js, TypeScript, and Knex.js to manage restaurant orders.

--> Installation: Clone the repository and install the dependencies.

--> atabase: Run the migrations to create the system tables: npm run knex migrate:latest

--> Run the Server: Start the backend development server: npm run dev

--> Testing: Use Insomnia or Postman to test the API requests (GET, POST, PUT, DELETE, PATCH).

## 🛠️ API Testing with Insomnia

--> Locate the collection file: requests_insomnia.

--> Import it into Insomnia.

--> Select the requests_insomnia file.

All requests in the collection are configured for the default URL: http://localhost:[YOUR_PORT].

## ⚙️ Technologies

This project was developed using the following technologies:

--> Node.js

--> TypeScript

--> Knex.js (Query Builder)

--> SQL (Database)

--> Git & GitHub
