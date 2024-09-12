---
sidebar_position: 27
---

# Selectively turn off request/response transform

To turn off class-transformer on a per-controller or per-route basis, use the transformRequest and transformResponse options on your controller and route decorators:

```
@Controller("/users", {transformRequest: false, transformResponse: false})
export class UserController {

    @Get("/", {transformResponse: true}) {
        // route option overrides controller option
    }
}
```
