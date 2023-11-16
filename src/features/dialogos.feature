Feature: Pruebas en seccion de Dialogos
    Como usario de la apk12
    Quiero probar los textos
    Para practicar testing Mobile

Background: 
    Given ingreso a la seccion dialogos

Scenario: Validacion de Mensaje
    When ingreso en el elemento Mensaje
    Then compruebo "Este es tu mensaje"

Scenario: Validacion de Eleccion
    When ingreso en el elemento Eleccion
    Then compruebo la opcion si
    Then compruebo la opcion no

Scenario: Validacion Contraseña
    When ingreso en el elemento Contraseña
    Then completo con la contraseña "Abcd1234*"
    Then acepto el ingreso

Scenario: Validacion Alerta
    When ingreso en el elemento Alerta
    Then veo un mensaje de "!Algo esta pasando¡"