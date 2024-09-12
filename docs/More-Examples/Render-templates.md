---
sidebar_position: 24
---

# Render templates

When using server-side rendering, you can render any template:

```
@Get("/users/:id")
@Render("index.html")
getOne() {
    return {
        param1: "these params are used",
        param2: "in templating engine"
    };
}
```

To use rendering ability make sure to configure express / koa properly. To use rendering ability with Koa you need to use a rendering third party such as [koa-views](https://github.com/queckezz/koa-views/), koa-views is the only render middleware proven through testing.
