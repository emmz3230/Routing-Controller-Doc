# Other Decorators

| Signature                                                        | Example                                            | Description                                                                                                                                 |
| ---------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `@Authorized(roles?: string or string[])	`                        | `@Authorized("SUPER_ADMIN") get()`                 | Checks if user is authorized and has given roles on a given route. `authorizationChecker` should be defined in routing-controllers options. |
|                                                                  |
| `@CurrentUser(options?: { required?: boolean })`                 | `get(@CurrentUser({ required: true }) user: User)` | Injects currently authorized user. `currentUserChecker` should be defined in routing-controllers options.                                   |
|                                                                  |
| `@Header(headerName: string, headerValue: string)`               | `@Header("Cache-Control", "private") get()`        | Allows to explicitly set any HTTP header returned in the response.                                                                          |
|                                                                  |
| `@ContentType(contentType: string)`                              | `@ContentType("text/csv") get()	`                   | Allows to explicitly set HTTP Content-Type returned in the response.                                                                        |
|                                                                  |
| `@Location(url: string)`                                         | `@Location("http://github.com") get()`             | Allows to explicitly set HTTP Location header returned in the response.                                                                     |
|                                                                  |
| `@Redirect(url: string)`                                         | `@Redirect("http://github.com") get()`             | Allows to explicitly set HTTP Redirect header returned in the response.                                                                     |
| `@HttpCode(code: number)`                                        | `@HttpCode(201) post()`                            | Allows to explicitly set HTTP code to be returned in the response.                                                                          |
| `@OnNull(codeOrError: number or Error)`                          | `@OnNull(201) post()`                              | Sets a given HTTP code when controller action returned null.                                                                                |
| `@OnUndefined(codeOrError: number   or Error)`                   | `@OnUndefined(201) post()`                         | Sets a given HTTP code when controller action returned undefined.                                                                           |
| `@ResponseClassTransformOptions(options: ClassTransformOptions)` | `@ResponseClassTransformOptions({/*...*/}) get()	`  | Sets options to be passed to class-transformer when it used for classToPlain a response result.                                             |
| ` @Render(template: string)	`                                     | `@Render("user-list.html") get()	`                  | Renders a given html template. Data returned by a controller serve as template variables.                                                   |
