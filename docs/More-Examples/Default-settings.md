---
sidebar_position: 27
---

# Default settings

You can override default status code in routing-controllers options.

```
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';

const app = createExpressServer({
  defaults: {
    //with this option, null will return 404 by default
    nullResultCode: 404,

    //with this option, void or Promise<void> will return 204 by default
    undefinedResultCode: 204,

    paramOptions: {
      //with this option, argument will be required by default
      required: true,
    },
  },
});

app.listen(3000);
```
