# Interceptor function

The easiest way is to use functions directly passed to `@UseInterceptor` of the action.

```
import { Get, Param, UseInterceptor } from "routing-controllers";

// ...

@Get("/users")
@UseInterceptor(function(action: Action, content: any) {
    // here you have content returned by this action. you can replace something
    // in it and return a replaced result. replaced result will be returned to the user
    return content.replace(/Mike/gi, "Michael");
})
getOne(@Param("id") id: number) {
    return "Hello, I am Mike!"; // client will get a "Hello, I am Michael!" response.
}
```

You can use `@UseInterceptor` per-action, or per-controller. If its used per-controller then interceptor will apply to all controller actions.
