---
sidebar_position: 4
---

# Pre-configure express/koa

If you have, or if you want to create and configure express app separately, you can use useExpressServer instead of createExpressServer function:

```
import { useExpressServer } from 'routing-controllers';

let express = require('express'); // or you can import it if you have installed typings
let app = express(); // your created express server
// app.use() // you can configure it the way you want
useExpressServer(app, {
  // register created express server in routing-controllers
  controllers: [UserController], // and configure it the way you need (controllers, validation, etc.)
});
app.listen(3000); // run your express server

```

:::note

koa users must use useKoaServer instead of useExpressServer

:::
