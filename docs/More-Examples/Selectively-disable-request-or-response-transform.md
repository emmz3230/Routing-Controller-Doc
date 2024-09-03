---
sidebar_position: 27
---

# Selectively disable request/response transform

To disable class-transformer on a per-controller or per-route basis, use the transformRequest and transformResponse options on your controller and route decorators:

```
@Controller("/users", {transformRequest: false, transformResponse: false})
export class UserController {

    @Get("/", {transformResponse: true}) {
        // route option overrides controller option
    }
}
```
