---
sidebar_position: 11
---

# Inject request body parameters

To inject request body parameter, use @BodyParam decorator:

```
@Post("/users")
saveUser(@BodyParam("name") userName: string) {
}
```

If you want to inject all header parameters use @HeaderParams() decorator.
