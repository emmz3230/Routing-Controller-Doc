---
sidebar_position: 1
---

# Working with JSON

If you are designing a REST API where your endpoints always receive and return JSON then you can use @JsonController decorator instead of @Controller. This guarantee you that data returned by your controller actions always transformed to JSON and Content-Type header will be always set to app/json. It also guarantee application/json header understood from the requests and the body parsed as JSON:

```
import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@JsonController()
export class UserController {
  @Get('/users')
  getAll() {
    return userRepository.findAll();
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return userRepository.findById(id);
  }

  @Post('/users')
  post(@Body() user: User) {
    return userRepository.insert(user);
  }
}
```
