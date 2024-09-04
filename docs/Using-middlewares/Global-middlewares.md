# Global middlewares

Global middlewares run before each request, always. To make your middleware global mark it with `@Middleware ` decorator and specify if it runs after or before controllers actions.

```
import { Middleware, ExpressMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'before' })
export class LoggingMiddleware implements ExpressMiddlewareInterface {
  use(request: any, response: any, next: (err: any) => any): void {
    console.log('do something...');
    next();
  }
}

```

To enable this middleware, specify it during routing-controllers initialization:

```
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';
import { LoggingMiddleware } from './LoggingMiddleware';

createExpressServer({
  controllers: [UserController],
  middlewares: [LoggingMiddleware],
}).listen(3000);
```
