# Loading middlewares, interceptors and controllers from directories

Also you can load middlewares from directories. Also you can use glob patterns:

```
import { createExpressServer } from 'routing-controllers';
import path from 'path';

createExpressServer({
  controllers: [path.join(__dirname, '/controllers/**/*.js')],
  middlewares: [path.join(__dirname, '/middlewares/**/*.js')],
  interceptors: [path.join(__dirname, '/interceptors/**/*.js')],
}).listen(3000);

```
