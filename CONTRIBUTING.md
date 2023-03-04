This is a monorepository that use npm workspaces to manage multiple packages. This includes:

- `packages/backend` - a simple backend application
- `packages/frontend` - a simple frontend application

# Getting Started

## Prerequisites

- NVM (Node Version Manager) or ASDF (version manager)
  - this repository is configured to be used with both of them
  - we use Node.js 18.14.2

## Installation

- `npm install`

## Running the application

- `npm run start:fe` - starts the frontend application in development mode
- `npm run start:be` - starts the backend application in development mode

## Running the tests

- `npm run test` - runs the unit tests and integration tests for both frontend and backend applications
- `npm run cucumber` - runs the end-to-end tests with Cucumber
- `npm run cy:run` - runs the end-to-end UI tests with Cypress
- `npm run cy:open` - runs the end-to-end UI tests with Cypress in interactive mode
