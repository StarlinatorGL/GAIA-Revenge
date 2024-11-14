const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', // Ruta de la carpeta donde están tus pruebas
  reporter: [['html', { outputFolder: 'playwright-report' }]], // Genera el reporte HTML en la carpeta especificada
});
