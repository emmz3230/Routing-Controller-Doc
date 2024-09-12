---
sidebar_position: 6
---

# Prefix all controllers routes

If you want to prefix all your routes,for Example . `/api` you can use routePrefix option:

```
import { createExpressServer } from 'routing-controllers';
import { UserController } from './controller/UserController';

createExpressServer({
  routePrefix: '/api',
  controllers: [UserController],
}).listen(3000);

```

:::note

koa users must use createKoaServer instead of createExpressServer

:::
