---
sidebar_position: 2
---

Install the  module:

```bash
    npm install routing-controllers
```

2. Include the **reflect-metadata** shim:

```bash
npm install reflect-metadata
```

make sure to import it before you use **routing-controllers**:

```
import 'reflect-metadata';
```

1. Install the framework & dependencies:

  a. If you want to use **routing-controllers** with express.js:
  Install it and all required dependencies:

```
npm install express body-parser multer
```

(Optionally, you can also install their type definitions:)

```
npm install -D @types/express @types/body-parser @types/multer
```

b. If you want to use **routing-controllers** with Koa 2:
Install it and all required dependencies:

```
npm install -D @types/express @types/body-parser @types/multer
```

(Optionally, you can also install their type definitions:)

```
npm install -D @types/koa @types/koa-bodyparser
```

4. Install peer dependencies:

```
npm install class-transformer class-validator
```

:::note

NOTE: In prior versions, these served as direct dependencies. Now, they serve as peer dependencies so you can choose when to upgrade and accept breaking changes.

:::

6. It is important to set these options in the **tsconfig.json** file of your project:




```
{
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  }
}

```

Learn about the routing-controllers in [Example of usage](docs\Example-usage.md). 
