---
sidebar_position: 5
---

# Load all controllers from the given directory

You can load all controllers from directories, by specifying array of directories in options of createExpressServer or useExpressServer:

```
import { createExpressServer } from 'routing-controllers';
import path from 'path';

createExpressServer({
  controllers: [path.join(__dirname + '/controllers/*.js')],
}).listen(3000); // register controllers routes in our express application
```

:::note

koa users must use createKoaServer instead of createExpressServer

:::
