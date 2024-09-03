---
sidebar_position: 19
---

# Set Location

You can set a Location header for any action:

```
@Get("/users")
@Location("http://github.com")
getUsers() {
    // ...
}
```
