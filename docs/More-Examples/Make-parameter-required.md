---
sidebar_position: 16
---

# Make parameter required

To make any parameter required, simply pass a required: true flag in its options:

```
@Post("/users")
save(@Body({ required: true }) user: any) {
    // your method will not be executed if user is not sent in a request
}
```

Same you can do with all other parameters @QueryParam, @BodyParam and others. If user request does not contain required parameter routing-controllers throw an error.
