---
sidebar_position: 26
---

# Enable cors

Since `CORS` a feature used almost in any web-api app, you can enable it in routing-controllers options.

```
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';

const app = createExpressServer({
  cors: true,
  controllers: [UserController],
});

app.listen(3000);
```

To use `cors` you need to install its module. For express its `npm i cors`, for koa its `npm i @koa/cors`. You can pass cors options as well:

```
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';

const app = createExpressServer({
  cors: {
    // options from cors documentation
  },
  controllers: [UserController],
});

app.listen(3000);
```
