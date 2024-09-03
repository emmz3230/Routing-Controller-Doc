---
sidebar_position: 22
---

# Controlling empty responses

If your controller returns void or Promise`<void>` or undefined it throw you 404 error.

To prevent this if you need to specify what status code you want to return using @OnUndefined decorator.

```
@Delete("/users/:id")
@OnUndefined(204)
async remove(@Param("id") id: number): Promise<void> {
    return userRepository.removeById(id);
}
```

@OnUndefined is also useful when you return some object which can or cannot be undefined. In this example findOneById returns undefined in the case if user with given id was not found. This action will return 404 in the case if user was not found, and regular 200 in the case if it was found.

```
@Get("/users/:id")
@OnUndefined(404)
getOne(@Param("id") id: number) {
    return userRepository.findOneById(id);
}
```

You can also specify error class you want to use if it returned undefined:

```
import { HttpError } from 'routing-controllers';

export class UserNotFoundError extends HttpError {
  constructor() {
    super(404, 'User not found!');
  }
}
```

```
@Get("/users/:id")
@OnUndefined(UserNotFoundError)
saveUser(@Param("id") id: number) {
    return userRepository.findOneById(id);
}
```

If controller action returns null you can use @OnNull decorator instead.
