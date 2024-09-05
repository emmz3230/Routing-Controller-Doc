---
sidebar_position: 2
---

Install module:

```
    npm install routing-controllers
```

2. Include the reflect-metadata shim:

```
npm install reflect-metadata
```

and make sure to import it before you use routing-controllers:

```
import 'reflect-metadata';
```

3. Install framework:

a. If you want to use routing-controllers with express.js, then install it and all required dependencies:

```
npm install express body-parser multer
```

Optionally you can also install their Type definitions:

```
npm install -D @types/express @types/body-parser @types/multer
```

b. If you want to use routing-controllers with koa 2, then install it and all required dependencies:

```
npm install -D @types/express @types/body-parser @types/multer
```

Optionally you can also install their Type definitions:

```
npm install -D @types/koa @types/koa-bodyparser
```

1. Install peer dependencies:

```
npm install class-transformer class-validator
```

:::note

In prior versions, These served as direct dependencies, But now, they serve as peer dependencies so you can choose when to upgrade and accept breaking changes.

:::

1. Its important to set these options in tsconfig.json file of your project:

```
{
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true
}

```

Learn about the routing-controllers in Example of usage.
