# Use existing middleware

Middleware can be used in various ways.
For example, lets try to use [compression](https://github.com/expressjs/compression) middleware:

1. Install compression middleware: `npm install compression`

2. To use middleware per-action:

```
import { Controller, Get, UseBefore } from "routing-controllers";
let compression = require("compression");

// ...

@Get("/users/:id")
@UseBefore(compression())
getOne(@Param("id") id: number) {
    // ...
}
```

This way, compression middleware applies only to the `getOne` controller action and runs before the action executes. To execute middleware after action use `@UseAfter` decorator instead.

3. To use middleware per-controller:

```
import { Controller, UseBefore } from 'routing-controllers';
let compression = require('compression');

@Controller()
@UseBefore(compression())
export class UserController {}

```

This way, compression middleware applies to all actions of the `UserController` and runs before its action execution. Same way you can use `@UseAfter` decorator here.

4. If you want to use compression module globally for all controllers you can simply register it during bootstrap:

```
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController'; // we need to "load" our controller before call createExpressServer. this is required
let compression = require('compression');
let app = createExpressServer({
  controllers: [UserController],
}); // creates express app, registers all controller routes and returns you express app instance
app.use(compression());
app.listen(3000); // run express application
```

Instead, you can create a custom [global middleware](https://github.com/typestack/routing-controllers/?tab=readme-ov-file#global-middlewares) and simply delegate its execution to the compression module.
