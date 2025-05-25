# Testing Guide for Physiotherapy Website

This document outlines how to run tests and ensure the website is functioning correctly.

## Available Test Types

1. **End-to-End Tests**: Using Playwright to automate browser interactions and validate website functionality
2. **Route Tests**: Checking that all pages/routes load correctly
3. **Build Testing**: Ensuring the project builds successfully
4. **CI/CD Pipeline**: GitHub Actions workflows for automated testing

## Prerequisites

- Node.js (version 18+)
- npm
- Browsers (Chrome, Firefox, Safari) for local testing

## Running Tests Locally

### 1. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 2. Start the Development Server

To run tests against a local server:

```bash
npm run dev
```

This starts the Next.js development server on http://localhost:3000

### 3. End-to-End Tests with Playwright

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all E2E tests
npm run test:e2e

# Run with UI mode
npx playwright test --ui

# Run a specific test file
npx playwright test tests/homepage.spec.ts
```

Test results will be available in the `playwright-report` directory.

### 4. Manual Route Testing

A quick way to check if all routes are responding correctly:

```bash
# Run while development server is running
npm run test:routes
```

This will check all routes defined in `test-routes.js` and report any issues.

## Test Structure

- **Homepage Tests**: Validate main sections, service cards, and interactive elements
- **Navigation Tests**: Ensure all routes and links work correctly
- **Performance Tests**: Check load times and responsive layout behavior
- **Accessibility Tests**: Verify forms are accessible and images have alt text

## GitHub Actions CI/CD

The repository includes two GitHub Actions workflows:

1. **Build Workflow** (`build.yml`): Verifies that the site builds correctly
2. **Test Workflow** (`test.yml`): Runs E2E tests with Playwright

These workflows are triggered on:
- Push to main branch
- Pull requests against main branch
- Manual dispatch

## Debugging Failed Tests

If Playwright tests fail, you can:

1. Check the detailed test report in `playwright-report/`
2. Look at test screenshots for failing tests
3. Run the test with debug mode: `npx playwright test --debug`
4. Fix the issue in the relevant component or page

## Expanding Test Coverage

To add more tests:

1. Create new test files in the `tests/` directory
2. Add routes to `test-routes.js` for additional route testing
3. Update GitHub Actions workflows if needed

## Performance Considerations

- Performance test thresholds are configurable in `tests/performance.spec.ts`
- All tests include reasonable timeouts for slower CI/CD environments 