# Middleware and Interceptor Decorators

| ccdd                                        | sww                                                    | www                                                                              |
| ------------------------------------------- | ------------------------------------------------------ | -------------------------------------------------------------------------------- |
| `@Middleware({ type: "before"or "after" })` | `@Middleware({ type: "before" }) class SomeMiddleware` | Registers a global middleware.                                                   |
| `@UseBefore()`                              | `@UseBefore(CompressionMiddleware)`                    | Uses given middleware before action is being executed.                           |
| `@UseAfter()	`                               | `@UseAfter(CompressionMiddleware)	`                     | Uses given middleware after action is being executed.                            |
| `@Interceptor()	`                            | `@Interceptor() class SomeInterceptor	`                 | Registers a global interceptor.                                                  |
| `@UseInterceptor()	`                         | `@UseInterceptor(BadWordsInterceptor)	`                 | Intercepts result of the given controller/action and replaces some values of it. |
