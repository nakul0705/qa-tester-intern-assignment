# SauceDemo Manual Test Cases

This document contains the 30 manual test cases prepared for the QA Tester Intern assignment.

| ID | Title | Preconditions | Steps | Expected Result | Priority |
|---|---|---|---|---|---|
| TC-001 | Login with valid credentials | Login page open | Enter standard_user and secret_sauce, click Login | User is redirected to Products page | High |
| TC-002 | Login with invalid username | Login page open | Enter invalid username and valid password | Appropriate login error is displayed | High |
| TC-003 | Login with invalid password | Login page open | Enter valid username and invalid password | Appropriate login error is displayed | High |
| TC-004 | Login with both fields empty | Login page open | Click Login without entering data | Required-field error is displayed | High |
| TC-005 | Login with empty username | Login page open | Enter password only and click Login | Username validation error is displayed | High |
| TC-006 | Login with empty password | Login page open | Enter username only and click Login | Password validation error is displayed | High |
| TC-007 | Login with locked-out user | Login page open | Enter locked_out_user / secret_sauce | User cannot log in and appropriate error is displayed | High |
| TC-008 | Verify password masking | Login page open | Enter password | Password characters are masked | Medium |
| TC-009 | Verify login page UI | Login page open | Inspect username, password, Login button and branding | All required elements are visible and usable | Medium |
| TC-010 | Logout successfully | User logged in | Open menu and click Logout | User is returned to login page | High |
| TC-011 | Verify product listing | User logged in | Open Products page | Products, names, prices and controls are displayed | High |
| TC-012 | Verify product price format | Products page open | Inspect product prices | Prices are displayed with valid currency and numeric values | Medium |
| TC-013 | Sort products Name A-Z | Products page open | Select Name (A to Z) | Products are ordered alphabetically ascending | Medium |
| TC-014 | Sort products Name Z-A | Products page open | Select Name (Z to A) | Products are ordered alphabetically descending | Medium |
| TC-015 | Sort products price low-high | Products page open | Select Price (low to high) | Cheapest product appears first | Medium |
| TC-016 | Sort products price high-low | Products page open | Select Price (high to low) | Most expensive product appears first | Medium |
| TC-017 | Open product details | Products page open | Click a product name/image | Correct product details page opens | Medium |
| TC-018 | Verify product details consistency | Product details open | Compare name, image, description and price with listing | All product information matches | High |
| TC-019 | Add one product to cart | Products page open | Click Add to cart for one product | Product is added and cart count updates | High |
| TC-020 | Add multiple products to cart | Products page open | Add two or more products | All selected products appear in cart | High |
| TC-021 | Verify cart product information | Product added | Open cart | Product name, image and price match selected product | High |
| TC-022 | Remove product from cart | Product exists in cart | Click Remove | Product is removed and cart count updates | High |
| TC-023 | Open empty cart | Cart contains no products | Open cart | Empty cart is displayed without incorrect product data | Medium |
| TC-024 | Start checkout with valid cart | Product exists in cart | Open cart and click Checkout | Checkout information page opens | High |
| TC-025 | Checkout with valid information | Checkout page open | Enter valid first name, last name and postal code | User proceeds to order summary | High |
| TC-026 | Checkout with empty first name | Checkout page open | Leave first name empty and submit | Validation error is displayed | High |
| TC-027 | Checkout with empty last name | Checkout page open | Leave last name empty and submit | Validation error is displayed | High |
| TC-028 | Checkout with empty postal code | Checkout page open | Leave postal code empty and submit | Validation error is displayed | High |
| TC-029 | Checkout with special characters | Checkout page open | Enter special characters in form fields and submit | Application handles input safely and displays appropriate validation | Medium |
| TC-030 | Complete order successfully | Valid product and checkout information | Proceed through summary and click Finish | Order confirmation is displayed and cart/order state is updated correctly | High |