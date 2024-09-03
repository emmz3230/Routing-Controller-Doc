---
sidebar_position: 21
---

# Set custom HTTP code

You can explicitly set a returned HTTP code for any action:

```
@HttpCode(201)
@Post("/users")
saveUser(@Body() user: User) {
    // ...
}
```
