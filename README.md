## Recopilacion de datos

### Prerequisitos

```
NodeJs = v10.19.0
Mongodb = v3.6.8
```

### Instalación

* Clona el repositorio por medio de git
```bash
$ git clone https://github.com/calypsobronte/test-ozel.git
```

<br>
<br>

#### Backend *(nodejs, morgan, express, mongoose, nodemon, ES6+)*

1. Ingresar al directorio clonado `test-ozel`

```bash
$ cd test-ozel
```

2. Instalar las dependencias para correr el server

```bash
$ yarn install o npm install
```

3. Inicie el servidor de desarrollo:
```bash
$ yarn start o npm start
```

4. Puede abrir postman e ingresar los datos con la siguiente endpoint  `http://localhost:5000/api/index` para saber que si esta corriendo el servidor correctamente. Si este `endpoint` corre bien puedes seguir con los demas endpoint que se encuentra en la tabla de rutas para postman.

  > Nota: la base de datos del proyecto se llama `registros` y se utilizo un cluster de mongo Atlas

<br>
<br>


### Rutas utilizadas por medio de postman
|  Entrada   |     URL    |  Salida   |
| ---------- | ---------- | ---------- |
| GET   | `http://localhost:5000/api/signup`   | [{"_id": "60aab107a5f8771375cfa33e", ...}] |
| POST   | `http://localhost:5000/api/signup`   | { "nombre": "Lina", ...} |
| PATCH   | `http://localhost:5000/api/signup/:id`   | [{"_id": "60aab107a5f8771375cfa33e", ...}] |
| DELET   | `http://localhost:5000/api/signup/:id`   | Datos eliminado con exito |
| POST   | `http://localhost:5000/api/login`   | { "email": "codelinamaria@gmail.com", ...} |


## Criterios de aceptacion
- [x] Guardar informacion en una base de datos
- [x] Construir REST API: GET, POST, PATCH, DELET
- [x] Montar la API en un servidor

## Construido con

* Manjaro
* Visual Studio Code
* Postman
* MongoDB Compass

## Contribuyendo

Contribuya usando GitHub Flow. Cree una rama, agregue confirmaciones y abra una solicitud de extracción .

## Versionado

v1

## Autor

* **Lina María Montaño Ramírez** - *Backend Developer* - [calypsobronte](https://github.com/calypsobronte)


## Licencia

 MIT License 
