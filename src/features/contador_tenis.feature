Feature: Contador de tenis
    Como usuario de la apk.12 del curso UTN.BA
    Quiero hacer un ejercicio en la opcion de Contador de tenis
    Para practicar pruebas automatizadas
Scenario Outline: Obtener un ganador 
    Given realizo tap en contador de tenis y se abre "Tanteador de tenis"
    When realizo tap en jugador rojo y obtengo 15 en el tablero
    When realizo tap x n° <veces> para ganar el set el jugador red 
    Then el jugador 2 ha ganado 1 set y muestra "Game Jugador 2"
Examples:
    | veces | 
    |   4   | 