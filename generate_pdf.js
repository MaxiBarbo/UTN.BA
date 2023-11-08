const fs = require('fs');
const { execSync } = require('child_process');
const PDFDocument = require('pdfkit');

// Paso 1: Ejecutar las pruebas Cucumber
console.log('Ejecutando pruebas Cucumber...');
try {
  execSync('npx cucumber-js', { stdio: 'inherit' }); // Ejecuta el comando 'npm test' para ejecutar las pruebas
} catch (error) {
  console.error('Error al ejecutar las pruebas Cucumber:', error);
  process.exit(1);
}

// Paso 2: Leer el archivo JSON de reporte
const reportData = JSON.parse(fs.readFileSync('./reports/cucumber_report.json', 'utf8'));

// Paso 3: Crear un nuevo documento PDF
const doc = new PDFDocument();
const outputFilePath = './reports/cucumber_report.pdf';

// Paso 4: Agregar contenido al PDF
doc.fontSize(20).text('Reporte de Pruebas Cucumber', { align: 'center' });

// Aquí puedes utilizar la información de 'reportData' para agregar contenido al PDF
// Por ejemplo, puedes recorrer los resultados de las pruebas y agregarlos al PDF.
reportData.forEach(feature => {
    doc.moveDown().fontSize(16).text(`Feature: ${feature.name}`);
    feature.elements.forEach(element => {
      doc.moveDown().fontSize(12).text(`Scenario: ${element.name}`);
      element.steps.forEach(step => {
        const status = step.result.status === 'passed' ? 'Exitoso' : 'Fallo'; // o cualquier otro criterio que desees usar
        doc.moveDown().fontSize(10).text(`Paso: ${step.keyword} ${step.name} - ${status}`);
      });
    });
  });

// Paso 5: Guardar el PDF en el sistema de archivos
doc.pipe(fs.createWriteStream(outputFilePath));
doc.end();

console.log(`Reporte PDF generado en ${outputFilePath}`);
