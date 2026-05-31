# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.x     | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability, please do **not** open a public issue. Instead, please report it privately by emailing the maintainers at [security@yourdomain.com] or by using GitHub's Private Vulnerability Reporting feature.

We will acknowledge receipt within 48 hours and provide an estimated timeline for a fix.

## Security Measures

### Secrets Management

- All secrets are stored as environment variables or GitHub Secrets
- `.env` files and credential files are excluded via `.gitignore`
- Gitleaks scanning is run in CI to detect accidentally committed secrets

### Dependency Security

- Dependabot is configured for automated dependency updates
- Renovate provides additional automated dependency management
- `npm audit` runs in CI to identify known vulnerabilities

### Application Security

- **Helmet** sets security-related HTTP headers (CSP, HSTS, X-Frame-Options, etc.)
- **CORS** is configured with restrictive defaults
- **Rate limiting** protects against brute-force and DoS attacks
- `x-powered-by` header is disabled to prevent fingerprinting

### CI/CD Security

- SAST scanning via CodeQL analyzes code for vulnerabilities on every push
- Gitleaks scans for secrets in every commit on main/master
- The `GITHUB_TOKEN` uses least-privilege permissions
- Secrets are never logged or exposed in build output

### OWASP Top 10 Compliance

| Category                       | Status                                        |
| ------------------------------ | --------------------------------------------- |
| Broken Access Control          | Rate limiting, CORS configuration             |
| Cryptographic Failures         | Helmet enforces secure headers (HSTS)         |
| Injection                      | Input validation required for all user inputs |
| Insecure Design                | CodeQL SAST scanning                          |
| Security Misconfiguration      | Helmet, disabled `x-powered-by`               |
| Vulnerable Components          | Dependabot + Renovate + npm audit             |
| Identification & Auth Failures | (Add auth as needed)                          |
| Software & Data Integrity      | CI/CD integrity checks                        |
| Logging & Monitoring           | Structured logging recommended                |
| SSRF                           | Input validation required                     |

## Development Security Checklist

- [ ] Run `npm audit` before deploying
- [ ] Review Dependabot alerts weekly
- [ ] Never commit `.env` or credential files
- [ ] Use parameterized queries for database operations
- [ ] Validate and sanitize all user inputs
- [ ] Use environment variables for all sensitive configuration

## Security Audit

Regular security audits are performed via:

- **Automated**: Gitleaks, npm audit, CodeQL, npm audit in CI
- **Manual**: Periodic code reviews with security focus
