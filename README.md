# QA Tester Intern Assignment

Manual testing, bug reporting, UI automation, and API testing project completed for the QA Tester Intern assignment.

## Project Overview

This project covers:

- Manual testing of SauceDemo
- 30 documented manual test cases
- Bug identification and reporting
- GitHub Issues and Kanban project
- Playwright UI automation
- ReqRes API automation
- Test execution reporting

## Application Under Test

### SauceDemo

https://www.saucedemo.com/

Test users used:

- `standard_user`
- `problem_user`
- `performance_glitch_user`
- `locked_out_user`

### API Under Test

ReqRes:

https://reqres.in/

## 1. Manual Testing

A total of **30 manual test cases** were created covering:

- Login
- Login validation
- Product listing
- Product sorting
- Product details
- Cart
- Checkout
- Negative scenarios
- Edge cases
- UI validation

Test cases are available here:

`manual-testing/test-cases.md`

## 2. Bug Reports

Three bugs were identified and documented using the `problem_user` account.

### BUG-001 — Product Images Do Not Match Corresponding Products

Severity: Medium  
Priority: High

Multiple products display incorrect product images.

### BUG-002 — Product Sorting Dropdown Does Not Accept Selection

Severity: Medium  
Priority: High

The sorting dropdown does not accept the selected sorting option.

### BUG-003 — Product Details Display Corrupted Information

Severity: High  
Priority: High

Product details display corrupted information including `ITEM NOT FOUND` and an invalid price value.

Detailed reports:

- `bug-reports/BUG-001.md`
- `bug-reports/BUG-002.md`
- `bug-reports/BUG-003.md`

Screenshots are stored in:

`screenshots/`

## 3. GitHub Issue Tracking

Each identified bug has been created as a separate GitHub Issue.

The issues are organized using a GitHub Project with the following Kanban columns:

- To Do
- In Progress
- Done

## 4. Test Automation

Playwright is used for automated UI testing.

The SauceDemo automation covers scenarios such as:

- Login
- Product listing
- Product sorting
- Product details
- Cart
- Checkout
- Logout

API automation is also included for the ReqRes API.

## 5. API Testing

The API tests cover:

- Successful GET request
- Successful POST request
- Invalid/missing data
- 404/not-found response
- HTTP status code assertions
- Response body structure assertions

API tests are located at:

`tests/api.spec.ts`

## 6. Running the Tests

### Install dependencies

```bash
npm install