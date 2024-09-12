---
sidebar_position: 18
---

# Set custom contentType

You can specify a custom ContentType header:

```
@Get("/users")
@ContentType("text/csv")
getUsers() {
    // ...
}
```
