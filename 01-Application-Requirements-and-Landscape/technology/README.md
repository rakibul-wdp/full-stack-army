# Choose Necessary Technology

### Requirements: (SRS - Software Requirement Specification)

Requirement Sample: [iTest Software Requirements Specification](https://itest.sourceforge.net/documentation/developer/Software_Requirements_Specification-iTest.pdf)

- Google Docs, Microsoft Office, Notion
- [Draw.io](https://app.diagrams.net), Lucid Chart (paid)

### Requirements Analysis & Design:

- System Design
  - Architectural Decision
    - Monolithic (Layered)
      - Easy to develop, but very complex to maintain when application grows.
    - Microservice
      - Very hard to develop, but easy to maintain
    - Serverless (Faas - Function As A Service)
  - Select Database
    - SQL
      - PostGreSQL
      - MySQL
    - NoSQL
      - MongoDB
      - Casandra
    - Key Value
      - Redis
      - DynamoDB
    - Graph Database
      - Neo4j
    - Search Database
      - Elastic Search (Open source - Full Text Search)
      - Algolia Search (Open AI 3 - Natural Language Processing)
- Software Architecture
  - OOP
  - OOP Design Pattern & Principles
  - DSA
  - Clean Code Architecture
  - problem Solving
- Testing
  - Test Driven Development
  - E2E (End to End)
- Distribution
  - DevOps
    - Continuous
      - Git & GitHub
      - Linux, SSH
      - Circle CI, Travis CI, Jenkins
      - Docker, Docker Compose
      - Docker Swam, Kubernetes
      - Prometheus, Nagios
      - Ansible
  - Cloud Engineering
    - VPC (Virtual Private Cloud)
    - EC2 (Elastic Computing Cloud)
    - S3 (Simple Storage Service)
    - RDS (Relational Database Service)
    - DynamoDB
    - Route 53
    - CloudFront (CDN)
    - SES (Simple Email Service)
    - SNS (Simple Notification Service)
    - SQS (Simple Queue Service)
    - API Gateway
    - Lambda
    - Step Function
    - Cloud Watch
    - Cloud Formation, Terraform, CDK
- Maintenance

### Our Decision For PS Caffe:
- Architecture - Monolithic
- Database - NoSQL (MongoDB Atlas)
- Backend - NodeJS (Express, Hapi, Fastify) (MVC)

### Steps:
- Requirements
- Design
- Implementation
  - UI/UX Design
  - Web Design
  - Frontend Development
  - Backend Development
  - Test Code
- Testing, Deployment
- Maintenance