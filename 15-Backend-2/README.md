# Backend 2 - Introduction to Backend Development

### What need to learn for Backend Development
- API Design
  - REST API
  - GraphQL
  - gRPC
  - SOAP (less than 1%)
  - Web Socket
  - Message Broker ** Not Beginner Friendly Concept

- API Security
  - JWT Token
  - Refresh Token
  - OAuth2
  - SAML
  - Identity Providers (Cognito, Auth0, Firebase, Okta)
  - Role Based Authorization

- API Testing
  - Unit Testing
  - Acceptance Testing
  - Load Testing

- API Documentation
  - Swagger
  - Postman

- Database
  - NoSQL
    - MongoDB
    - AWS DynamoDB
  - SQL
    - PostgreSQL
    - MySQL
    - MSSQL / Oracle
  - In Memory*
    - Redis*
    - Mem Cached
  - Graph Database
    - Neo4J

- Linux Server
- Cloud Computing
- DevOps

### Server Application Responsibility
- Listen Request
  - Always Same
- Process
  - Algorithm
  - Data Structure
  - Database
  - Problem Solving
  - CRUD
- Response
  - Always Same

### HTTP:
- GET - want to read data from server
- POST - create new data
- PUT/PATCH - update existing content
- DELETE - delete data from database

### Routing Patterns
- GET Everything - /books
- GET One Book - /books/bookId
- POST New Book - /books
- Update Book - /books/bookId
- Delete Book - /books/bookId

### REQUEST -> MIDDLEWARE[logger, body parser, file parser, user ip, block ip, authentication, authorization, validation] -> CONTROLLER (business logic) -> MIDDLEWARE[error handler] RESPONSE