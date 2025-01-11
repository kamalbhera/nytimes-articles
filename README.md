# NY Times Most Popular Articles App

## Overview
This React app fetches and displays the most popular articles from the NY Times API. Users can click on an article to view more details.

## Features
- Fetches articles from the NY Times Most Popular API.
- Displays a list of articles with their titles and authors.
- Shows detailed information about a selected article.
- Clean, reusable, and modular code using modern JavaScript practices.

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher) and npm installed.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd nytimes-articles
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your NY Times API key:
   ```env
   REACT_APP_NYTIMES_API_KEY=your-api-key
   ```

## Run the App
To start the development server:
```bash
npm start
```
Open your browser and navigate to `http://localhost:3000`.

## Testing

### Unit Tests
Run unit tests with Jest:
```bash
npm test
```

### End-to-End Tests
Run Cypress for E2E testing:
```bash
npm run cypress:open
```

### Linting
Run ESLint to check for coding issues:
```bash
npm run lint
```

## Build the App
To build the app for production:
```bash
npm run build
```

## Coverage Reports
Generate code coverage reports:
```bash
npm run test:coverage
```
View the coverage summary in the terminal or open the detailed report in `coverage/lcov-report/index.html`.

## SonarQube Analysis
Run SonarQube analysis for code quality:
```bash
npm run sonarqube
```

## Folder Structure
```
nytimes-articles/
├── public/
├── src/
│   ├── components/
│   │   ├──__tests__/
│   │      ├── ArticleDetail.test.js
│   │      ├── ArticleList.test.js
│   │   ├── ArticleDetail.js
│   │   ├── ArticleList.js
│   ├── __tests__/
│   │   ├── App.test.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   ├── index.css
├── cypress/
│   ├── e2e/
│   │   ├── spec.cy.js
├── .env
├── package.json
├── sonar-project.properties
├── README.md
```