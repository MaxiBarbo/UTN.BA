Feature: Enviar primer mensaje de usuario

    Como empleado de una empresa
    Quiero poder enviar un mensaje de chat hasta 512 caracteres
    Para comunicarme con otro empleado de la empresa

Background: 
    Given el usuario esta autenticado en el sistema

Scenario: Empleado autenticado envía un mensaje de chat a otro empleado exitosamente
    When el usuario autenticado inicia el mensaje de chat a otro usuario de nombre 'dlopez'
    When el usuario escribe un mensaje de menos de <caracteres> caracteres
    Then el usuario envia el mensaje 
Examples:
    | caracteres | 
    | 512        |   
    
   