# Typescript MVC

## Setup

- package.json

  ```
  $ npm init -y
  $ npm install typescript @types/typescript
  ```

- tsconfig.json

  ```
  {
    "compilerOptions": {
      "outDir": "./build",
      "lib": ["es5", "es6"],
      "module": "commonjs",
      "target": "es6",
      "sourceMap": true
      },
    "exclude": ["node_modules"]
  }
  ```

- hapi

  ```
  $ npm install hapi @types/hapi
  ```

- dotenv

  ```
  $ npm install dotenv @types/dotenv
  ```
