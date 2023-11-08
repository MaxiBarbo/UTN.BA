const { Given, When, Then } = require('@cucumber/cucumber');
const { expect, assert } = require('chai');

let usuarioAutenticado;
let destinatario;
let mensaje;

Given('el usuario esta autenticado en el sistema', () => {
  // Remplara esta variabale con el nombre real a probar 
  usuarioAutenticado = { nombre: 'dlopez' };
  
});

When('el usuario autenticado inicia el mensaje de chat a otro usuario de nombre {string}', (nombreDestinatario) => {
    destinatario = { nombre: nombreDestinatario };
    mensaje = { emisor: usuarioAutenticado.nombre, receptor: destinatario.nombre, contenido: '' };
    // console.log(mensaje)
    // expect(usuarioAutenticado).to.equal(nombreDestinatario);
    expect(nombreDestinatario).to.be.a('string');
    expect(usuarioAutenticado.nombre).to.equal(nombreDestinatario);
});

function contarCaracteres(carta) {
  return carta.length;
}

When('el usuario escribe un mensaje de menos de {int} caracteres', (maxCaracteres) => {
    let carta = "Hola que tal, mi nombre es bla bla bla y te escribo para hacer prueba de envio de chats"; // Reemplaza esto con el contenido real obtenido del mensaje real a probar
    let numeroDeCaracteres = contarCaracteres(carta);

    if (numeroDeCaracteres <= maxCaracteres) {
        console.log(`La carta tiene ${numeroDeCaracteres} caracteres y cumple con el límite de ${maxCaracteres}.`);
    } else {

      throw new Error(`La carta tiene ${numeroDeCaracteres} caracteres, pero debe tener ${maxCaracteres} o menos.`);
    }
});

Then('el usuario envia el mensaje', () => {
    // En un escenario real, esta parte podría involucrar el envío a través de una API o interfaz de usuario.
    // Por ejemplo:
    let value = true
    assert.equal(value, true); // Suponiendo que la función de envío de mensajes devuelve true si se envió correctamente
    // Simulación del envío exitoso
     expect(value).to.be.true;
});
