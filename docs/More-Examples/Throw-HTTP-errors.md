---
sidebar_position: 25
---

# Throw HTTP errors

If you want to return errors with specific error codes, An easy way exists:

```
@Get("/users/:id")
getOne(@Param("id") id: number) {

    const user = this.userRepository.findOneById(id);
    if (!user)
        throw new NotFoundError(`User was not found.`); // message is optional

    return user;
}
```

Now, when the system fails to find a user with the requested ID, Respond with HTTP status code 404 and the following content.:

```
{
  "name": "NotFoundError",
  "message": "User was not found."
}
```

A set of prepared errors is available for you to use:

- HttpError
- BadRequestError
- ForbiddenError
- InternalServerError
- MethodNotAllowedError
- NotAcceptableError
- NotFoundError
- UnauthorizedError

You can also create and use your own errors by extending HttpError class. To define the data returned to the client, you could define a to JSON method in your error.

```
class DbError extends HttpError {
  public operationName: string;
  public args: any[];

  constructor(operationName: string, args: any[] = []) {
    super(500);
    Object.setPrototypeOf(this, DbError.prototype);
    this.operationName = operationName;
    this.args = args; // can be used for internal logging
  }

  toJSON() {
    return {
      status: this.httpCode,
      failedOperation: this.operationName,
    };
  }
}
```
