---
sidebar_position: 13
---

# Inject session object

To inject a session value, use @SessionParam decorator:

```
@Get("/login")
savePost(@SessionParam("user") user: User, @Body() post: Post) {}
```

If you want to inject the main session object, use @Session() without any parameters.

```
@Get("/login")
savePost(@Session() session: any, @Body() post: Post) {}
```

The parameter marked with @Session decorator is required by default. If your action param is optional, you have to mark it as not required:

```
action(@Session("user", { required: false }) user: User) {}
```

Express uses express-session / Koa uses koa-session or koa-generic-session to handle session, so firstly you have to install it manually to use @Session decorator.
