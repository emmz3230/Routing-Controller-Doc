---
sidebar_position: 12
---

# Inject request header parameters

To inject request header parameter, use @HeaderParam decorator:

```
@Post("/users")
saveUser(@HeaderParam("authorization") token: string) {
}
```

If you want to inject all header parameters use @HeaderParams() decorator.
