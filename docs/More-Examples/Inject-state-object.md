---
sidebar_position: 14
---

# Inject state object

To inject a state parameter use @State decorator:

```
@Get("/login")
savePost(@State("user") user: User, @Body() post: Post) {
}
```

If you want to inject the whole state object use @State() without any parameters. This feature is only supported by Koa.
