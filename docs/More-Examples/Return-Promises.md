---
sidebar_position: 2
---

# Return promises

You can return a promise in the controller, and it wait until promise resolved and return promise result in a response body.

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

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: User) {
    return userRepository.updateById(id, user);
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return userRepository.removeById(id);
  }
}
```
