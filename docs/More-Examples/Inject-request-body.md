---
sidebar_position: 10
---

# Inject request body

To inject request body, use @Body decorator:

```
@Post("/users")
saveUser(@Body() user: User) {
}
```

If you specify a class type to parameter that's decorated with @Body(),
routing-controllers use [class-transformer]|(https://github.com/typestack/class-transformer)
to create instance of the given class type from the data received in request body.

To turn off this behaviour you need to specify a
`{ classTransformer: false }`
in RoutingControllerOptions when creating a server.
