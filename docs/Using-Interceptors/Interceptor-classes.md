# Interceptor classes

You can also create a class and use it with `@UseInterceptor` decorator:

```
import { Interceptor, InterceptorInterface, Action } from 'routing-controllers';

export class NameCorrectionInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    return content.replace(/Mike/gi, 'Michael');
  }
}
```

And use it in your controllers this way:

```
import { Get, Param, UseInterceptor } from "routing-controllers";
import { NameCorrectionInterceptor } from "./NameCorrectionInterceptor";

// ...

@Get("/users")
@UseInterceptor(NameCorrectionInterceptor)
getOne(@Param("id") id: number) {
    return "Hello, I am Mike!"; // client will get a "Hello, I am Michael!" response.
}
```
