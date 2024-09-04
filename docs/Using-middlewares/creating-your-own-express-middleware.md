# Creating your own express middleware

Here is example of creating middleware for express.js:

1. There are two ways of creating middleware:

First, you can create a simple middleware function:

```
export function loggingMiddleware(request: any, response: any, next?: (err?: any) => any): any {
  console.log('do something...');
  next();
}
```

Second you can create a class:

```
import { ExpressMiddlewareInterface } from 'routing-controllers';

export class MyMiddleware implements ExpressMiddlewareInterface {
  // interface implementation is optional

  use(request: any, response: any, next?: (err?: any) => any): any {
    console.log('do something...');
    next();
  }
}
```

2. Then you can use them this way:

```
import { Controller, UseBefore } from 'routing-controllers';
import { MyMiddleware } from './MyMiddleware';
import { loggingMiddleware } from './loggingMiddleware';

@Controller()
@UseBefore(MyMiddleware)
@UseAfter(loggingMiddleware)
export class UserController {}
```

or per-action:

```
@Get("/users/:id")
@UseBefore(MyMiddleware)
@UseAfter(loggingMiddleware)
getOne(@Param("id") id: number) {
    // ...
}
```

`@UseBefore` executes middleware before controller action. `@UseAfter` executes middleware after each controller action.
