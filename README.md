# Top Secret

Top Secret es una web app para niñas y niños en la que podrán codificar y descifrar mensajes secretos para sus amigas y amigos. El código se hace por medio del Cifrado César, el cual es un método simple de codificación por sustitución.

El _boilerplate_ contiene una estructura de archivos como punto de partida así como toda la configuración de dependencias y tests de ejemplo:

```text
./
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── cipher.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── cipher.spec.js
    ├── headless.js
    └── index.html
```

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guía de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests). En el caso de `JavaScript` estamos usando un archivo de configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre la version de JavaScript/ECMAScript, el
entorno y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).

## Instrucciones de uso para desarrolladores

### Obtener una copia local del repositorio

1. Hacer un :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   de este repositorio: https://github.com/KarenAmicone/cdmx-2019-01-bc-core-am-cipher
2. Clonar el fork en tu computadora (copia local).

### Software necesario

1. Tener un editor de texto como [Atom](https://atom.io/), [Visual Code](https://code.visualstudio.com/), [Sublime Text](https://www.sublimetext.com) o cualquier otro.
2. Para ejecutar los comandos a continuación necesitarás una :shell: 
   Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS, ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git` también). 
   Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win). 
3. Instalar [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Instala las dependencias del proyecto con el comando `npm install`. 

### Ejecutando las pruebas

Las pruebas unitarias (unit tests) se podrán ejecutar con el comando `npm run test` en la shell.

### Pruebas end-to-end

Las pruebas unitarias verifican que el elemento principal sea un objeto, que las propiedades del objeto sean funciones y que codifique y decodifique con base en el número de *offset* o desplazamiento elegido, con las siguientes especificaciones:
1. Si la letra es mayúscula, que devuelva la mayúscula correspondiente al *offset*. 
2. Si la letra es minusucula, que devuelva la minúscula correspondiente al *offset*.
3. Si es un caracter no alfabético, que devuelva el mismo caracter.

### Deployment

El proyecto se encuentra alojado en la página: [Cesar Cipher](https://karenamicone.github.io/cdmx-2019-01-bc-core-am-cipher/src/)

### Autores
Karen Amicone
[Contribuyentes](https://github.com/KarenAmicone/cdmx-2019-01-bc-core-am-cipher/graphs/contributors) 

## Diseño UX
La documentación del diseño UX puede consultarse en el siguiente link: [Diseño UX Cesar Cipher](https://docs.google.com/document/d/1eA3sjK16WoRj7Pie5-v7Ns9asqN7ZtfMy1Lf3lawXTk/edit#)

## Agradecimientos
Gracias a Laboratoria por hacer posible el desarrollo de este proyecto.
