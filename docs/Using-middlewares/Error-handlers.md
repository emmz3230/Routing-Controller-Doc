# Error handlers

Error handlers are specific only to express. Error handlers work same way as middlewares, but implement `ExpressErrorMiddlewareInterface:`

Create a class that implements the ErrorMiddlewareInterface interface:

```
import { Middleware, ExpressErrorMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'after' })
export class CustomErrorHandler implements ExpressErrorMiddlewareInterface {
  error(error: any, request: any, response: any, next: (err: any) => any) {
    console.log('do something...');
    next();
  }
}
```

Custom error handlers are invoked after the default error handler, so you won't be able to change response code or headers. To prevent this, you have to disable default error handler by specifying `defaultErrorHandler` option in createExpressServer or useExpressServer:

```
createExpressServer({
  defaultErrorHandler: false, // disable default error handler, only if you have your own error handler
}).listen(3000);
```
