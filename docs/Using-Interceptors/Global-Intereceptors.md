# Global interceptors

You can create interceptors that affect all controllers in your project by creating interceptor class and mark it with `@Interceptor` decorator:

```
import { Interceptor, InterceptorInterface, Action } from 'routing-controllers';

@Interceptor()
export class NameCorrectionInterceptor implements InterceptorInterface {
  intercept(action: Action, content: any) {
    return content.replace(/Mike/gi, 'Michael');
  }
}
```
