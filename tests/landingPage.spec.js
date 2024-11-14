const { test, expect } = require('@playwright/test');

test('Carga la página correctamente', async ({ page }) => {
  await page.goto('http://localhost:7050'); // Cambia la URL a la de tu servidor local
  await expect(page).toHaveTitle(/GAIA_Revenge/); // Verifica el título de la página
});