---
sidebar_position: 18
---

# Set custom ContentType

You can specify a custom ContentType header:

```
@Get("/users")
@ContentType("text/csv")
getUsers() {
    // ...
}
```
