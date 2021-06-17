[![N|Solid](https://stories.coderio.co/wp-content/uploads/2019/06/android-icon-48x48.png)](https://coderio.co/)
## api-rest-functional-test

#### install 
Como primeros pasos se deben instalar las dependencias del proyecto para su ejecución:
```
npm install
```
alternativa
```
yarn
```

#### web page con APIS REST de pruebas 
Se utilizo las apis rest que ofrece la web page para realizar las pruebas de ejemplo.
https://reqres.in/

##### html report formatting 
https://www.npmjs.com/package/cucumber-html-reporter

## DOC IN PROGRESS for more information => slack Gaston Genaud

## _Creación de un caso de prueba automatizado_
Para el proceso de la creación de un caso de prueba automatizado arrancamos con trasladar un caso de prueba manual refactorizandolo a una estructura BDD para un mejor manejo a la hora del desarrollo.
como primera instancia se tiene que trasladar el caso de prueba a un lenguaje comun para el negocio y a su vez trabajarlo en un lenguaje tecnico, para eso utilizamos el framework Cucumber el cual es una herramienta de software que admite el desarrollo basado en el comportamiento (BDD). 

Lenguaje común para negocio y técnicos: Gherkin
Gherkin es un lenguaje común, que lo puede escribir alguien sin conocimientos en programación, pero que lo puede comprender también un programa, de forma tal de utilizarlo como especificación de pruebas.
Típicamente, estas pruebas se van a guardar en archivos “.feature”, los cuales deberían estar versionados junto al código fuente del sistema que se está probando. Este es un ejemplo simple tomado de Cucumber:
```
Feature : User Routes - API REST /users/

  Scenario: creating a user
    Given A body request
    When I send the POST request to /createUser
    Then I get the statusCode 200 and the message "Success"
```

## Features
Como vimos anteriormente un feature esta conformado por :
- Feature: nombre de la funcionalidad que vamos a probar, el título de la prueba.
- Scenario: habrá uno por cada prueba que se quiera especificar para esta funcionalidad.
- Given: acá se marca el contexto, las precondiciones.
- When: se especifican las acciones que se van a ejecutar.
- Then: y acá se especifica el resultado esperado, las validaciones a realizar.

Para no generar un archivo step tan cargado de funciones que basicamente realizan lo mismo es importante establecer una nomenclatura para todos los casos de prueba.
Por ejemplo para todos los llamados **When** que realicen llamados POST :
**I send the POST request to** [valor]
Para llamados GET :
**I send the GET request to** [valor]

Y asi establecemos una estructura generica para todos los llamados a las apis.

Para el caso de los Then ocurre lo mismo.
Se espera siempre validar el statusCode como minimo y si en caso de que la funcionalidad lo requiera, se valida el mensaje que se devuelve :
**Then I get the statusCode** [valor]
o
Then **I get the statusCode** [valor] **and message** "[valor2]"
esta ultima estructura incluso se la puede utilizar para validar casos de prueba exitosos ó errores esperados por elejemplo un valor de statusCode 404 y un message "Not Found"

## Steps
Todos los pasos estan alojados en la ruta /src/steps
#### web page con APIS REST de pruebas 
Se utilizo las apis rest que ofrece la web page para realizar las pruebas de ejemplo.
https://reqres.in/

##### html report formatting 
https://www.npmjs.com/package/cucumber-html-reporter

## DOC IN PROGRESS for more information => slack Gaston Genaud
