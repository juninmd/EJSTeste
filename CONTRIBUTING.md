# Contributing to EJSTeste

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and deployment.

### Pipeline Stages

1. **Lint** - ESLint, Prettier formatting check, and `npm audit` security scan
2. **Test** - Jest unit, integration, and E2E tests with coverage reporting
3. **Build** - Prepare optimized build artifacts
4. **Deploy** - Automatic deployment to production on `main` branch pushes

### Quality Gates

- All linting checks must pass
- Minimum 80% code coverage
- No critical security vulnerabilities
- Build must complete successfully

### Local Development

```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Format code
npm run format

# Full validation
npm run validate
```

### Environment Variables

| Variable            | Description                          | Required    |
| ------------------- | ------------------------------------ | ----------- |
| `CODEPORT_TOKEN`    | Token for Codecov uploads            | Only for CI |
| `SLACK_WEBHOOK_URL` | Webhook for deployment notifications | Only for CI |
| `NODE_ENV`          | Environment (development/production) | Optional    |

### Deployment Process

1. Push changes to `develop` branch triggers CI validation
2. Create PR from `develop` to `main` for review
3. Merge to `main` triggers automated deployment
4. Post-deployment health checks run automatically
5. Deployment notifications sent via Slack

### Rollback

To rollback a deployment:

1. Revert the commit on `main`
2. Push the revert
3. The CI/CD pipeline will automatically redeploy
