const { test, expect } = require('@playwright/test');

test('Validar botones y enlaces en la landing page', async ({ page }) => {
  // Navegar a la Landing Page
  await page.goto('https://gaia-revenge.vercel.app/');

  // Validar que el botón de "Play" esté presente y funcione
  const playButton = await page.locator('button#play-button');
  await expect(playButton).toBeVisible();
  await playButton.click();
  
  // Validar que el enlace de "About" funcione correctamente
  const aboutLink = await page.locator('a#about-link');
  await expect(aboutLink).toHaveAttribute('href', '#about');
  await aboutLink.click();
  
  // Validar que el enlace de "Contact" redirija correctamente
  const contactLink = await page.locator('a#contact-link');
  await expect(contactLink).toHaveAttribute('href', '#contact');
  await contactLink.click();

  // Esperar que el contenido de la sección "Contact" se muestre después de hacer clic en el enlace
  const contactSection = await page.locator('#contact');
  await expect(contactSection).toBeVisible();
});
