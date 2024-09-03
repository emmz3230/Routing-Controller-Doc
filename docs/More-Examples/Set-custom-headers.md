---
sidebar_position: 23
---

# Set custom headers

You can set any custom header in a response:

```
@Get("/users/:id")
@Header("Cache-Control", "none")
getOne(@Param("id") id: number) {
    // ...
}
```
