const { execSync } = require('child_process');

try {
  // Ejecuta los escenarios de Cucumber
  execSync('npx cucumber-js ./features');
} catch (error) {
  console.error('Error al ejecutar las pruebas:', error);
  process.exit(1);
}
