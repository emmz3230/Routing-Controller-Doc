# Using DI container

`routing-controllers` supports a DI container out of the box. You can inject your services into your controllers, middlewares, and error handlers. Container must be setup during app bootstrap. Example how to integrate routing-controllers with [typedi](https://github.com/typestack/typedi):

```
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import path from 'path';

// its important to set container before any operation you do with routing-controllers,
// including importing controllers
useContainer(Container);

// create and run server
createExpressServer({
  controllers: [path.join(__dirname, '/controllers/*.js')],
  middlewares: [path.join(__dirname, '/middlewares/*.js')],
  interceptors: [path.join(__dirname, '/interceptors/*.js')],
}).listen(3000);
```

That's it, now you can inject your services into your controllers:

```
@Controller()
@Service()
export class UsersController {
  constructor(private userRepository: UserRepository) {}

  // ... controller actions
}
```

:::note

As TypeDI@0.9.0 won't create instances for unknown classes, you have to decorate your Controller as a Service() as well. See [#642](https://github.com/typestack/routing-controllers/issues/642)
:::

For other IoC providers that don't expose a `get(xxx)` function, you can create an IoC adapter using `IocAdapter` like so:

```
// inversify-adapter.ts
import { IocAdapter } from 'routing-controllers';
import { Container } from 'inversify';

class InversifyAdapter implements IocAdapter {
  constructor(private readonly container: Container) {}

  get<T>(someClass: ClassConstructor<T>, action?: Action): T {
    const childContainer = this.container.createChild();
    childContainer.bind(API_SYMBOLS.ClientIp).toConstantValue(action.context.ip);
    return childContainer.resolve<T>(someClass);
  }
}
```

And then tell Routing Controllers to use it:

```
// Somewhere in your app startup
import { useContainer } from 'routing-controllers';
import { Container } from 'inversify';
import { InversifyAdapter } from './inversify-adapter.ts';

const container = new Container();
const inversifyAdapter = new InversifyAdapter(container);
useContainer(inversifyAdapter);
```
