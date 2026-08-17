import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const BASE_URL = 'https://reqres.in';
const API_KEY = process.env.REQRES_API_KEY;

if (!API_KEY) {
  throw new Error('REQRES_API_KEY is not configured');
}

const headers = {
  'x-api-key': API_KEY,
  'Content-Type': 'application/json',
};

test.describe('ReqRes API Tests', () => {

  // API-001: Successful GET
  test('API-001 - GET users returns 200 and valid response structure', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/api/users`, {
      headers,
    });

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('page');
    expect(body).toHaveProperty('per_page');
    expect(body).toHaveProperty('total');
    expect(body).toHaveProperty('total_pages');
    expect(body).toHaveProperty('data');

    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);

    expect(body.data[0]).toHaveProperty('id');
    expect(body.data[0]).toHaveProperty('email');
    expect(body.data[0]).toHaveProperty('first_name');
    expect(body.data[0]).toHaveProperty('last_name');
    expect(body.data[0]).toHaveProperty('avatar');
  });


  // API-002: Successful POST
  test('API-002 - POST user returns 201 and created user data', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/api/users`, {
      headers,
      data: {
        name: 'Nakul QA',
        job: 'QA Tester',
      },
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toHaveProperty('name', 'Nakul QA');
    expect(body).toHaveProperty('job', 'QA Tester');
    expect(body).toHaveProperty('id');
    expect(body).toHaveProperty('createdAt');
  });


  // API-003: 404 Not Found
 test('API-003 - GET non-existent user returns 404 with empty response body', async ({ request }) => {
  const response = await request.get(`${BASE_URL}/api/users/999999`, {
    headers,
  });

  expect(response.status()).toBe(404);

  const body = await response.json();

  expect(body).toEqual({});
});


  // API-004: Invalid / missing data
 test('API-004 - Login with missing credentials returns 400 and error message', async ({ request }) => {
  const response = await request.post(`${BASE_URL}/api/login`, {
    headers,
    data: {},
  });

  expect(response.status()).toBe(400);

  const body = await response.json();

  expect(body).toHaveProperty('error');
  expect(typeof body.error).toBe('string');
});
});