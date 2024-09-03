---
sidebar_position: 20
---

# Set Redirect

You can set a Redirect header for any action:

```
@Get("/users")
@Redirect("http://github.com")
getUsers() {
    // ...
}
```

You can override the Redirect header by returning a string value:

```
@Get("/users")
@Redirect("http://github.com")
getUsers() {
    return "https://www.google.com";
}
```

You can use template to generate the Redirect header:

```
@Get("/users")
@Redirect("http://github.com/:owner/:repo")
getUsers() {
    return {
        owner: "typestack",
        repo: "routing-controllers"
    };
}
```
