import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('test');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Chicken Katsu', { exact: true })).toContainText("Chicken Katsu");
});

test('CheckRecipies', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByText('Chicken Katsu', { exact: true })).toContainText("Chicken Katsu");
});

test('CreateRecipe', async ({ page }) => {
  page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('test');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Create Recipie' }).click();
  await expect(page.getByText('Create New Recipie')).toContainText("Create New Recipie");
});
