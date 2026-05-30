# EJSTeste

![CI/CD Pipeline](https://github.com/juninmd/EJSTeste/actions/workflows/ci.yml/badge.svg)
![Security Scan](https://github.com/juninmd/EJSTeste/actions/workflows/security.yml/badge.svg)
[![codecov](https://codecov.io/gh/juninmd/EJSTeste/branch/main/graph/badge.svg)](https://codecov.io/gh/juninmd/EJSTeste)
[![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)

A standard Express.js + EJS web application.

## Installation

```bash
git clone https://github.com/your-username/EJSTeste.git
cd EJSTeste
npm install
```

## Usage

```bash
npm start
```

Open http://localhost:4000/ in your browser.

## Development

```bash
# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format

# Full validation
npm run validate
```

## CI/CD Pipeline

| Stage  | Description                             |
| ------ | --------------------------------------- |
| Lint   | ESLint, Prettier checks, security audit |
| Test   | Jest with coverage (80% min)            |
| Build  | Production artifact preparation         |
| Deploy | Automatic on main branch merges         |

## Project Structure

```
.
├── index.js          # Express app setup
├── server.js          # Server startup
├── views/            # EJS templates
├── __tests__/        # Test files
├── .github/          # GitHub Actions workflows
└── package.json      # Dependencies and scripts
```

## Branch Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- Feature branches created from `develop`

## Deployment

Automated deployment happens on every merge to `main`. Post-deployment health checks ensure service availability. See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed deployment and rollback procedures.
