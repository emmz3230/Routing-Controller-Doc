# Creating your own koa middleware

Here is example of creating middleware for koa.js:

1. There are two ways of creating middleware:

First, you can create a simple middleware function:

```
export function use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
  console.log('do something before execution...');
  return next()
    .then(() => {
      console.log('do something after execution');
    })
    .catch(error => {
      console.log('error handling is also here');
    });
}
```

Second you can create a class:

```
import { KoaMiddlewareInterface } from 'routing-controllers';

export class MyMiddleware implements KoaMiddlewareInterface {
  // interface implementation is optional

  use(context: any, next: (err?: any) => Promise<any>): Promise<any> {
    console.log('do something before execution...');
    return next()
      .then(() => {
        console.log('do something after execution');
      })
      .catch(error => {
        console.log('error handling is also here');
      });
  }
}
```

2. Then you can them this way:

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
