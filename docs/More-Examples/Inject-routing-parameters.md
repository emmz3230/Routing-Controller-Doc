---
sidebar_position: 8
---

# Inject routing parameters

You can use @Param decorator to inject parameters in your controller actions:

```
@Get("/users/:id")
getOne(@Param("id") id: number) { // id will be automatically casted to "number" because it has type number
}
```

If you want to inject all parameters use @Params() decorator.
