---
sidebar_position: 3
---

# Example of usage

1. Create a file UserController.ts

```
import 'reflect-metadata';
import { Controller, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@Controller()
export class UserController {
  @Get('/users')
  getAll() {
    return 'This action returns all users';
  }

  @Get('/users/:id')
  getOne(@Param('id') id: number) {
    return 'This action returns user #' + id;
  }

  @Post('/users')
  post(@Body() user: any) {
    return 'Saving user...';
  }

  @Put('/users/:id')
  put(@Param('id') id: number, @Body() user: any) {
    return 'Updating a user...';
  }

  @Delete('/users/:id')
  remove(@Param('id') id: number) {
    return 'Removing user...';
  }
}
```

This class register routes specified in method decorators in your server framework (express.js or koa).

2. Create a file app.ts

```
// this shim is required
import { createExpressServer } from 'routing-controllers';
import { UserController } from './UserController';

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [UserController], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(3000);
```

:::note

If you use Koa you just need to use createKoaServer instead of createExpressServer

:::

1. Open in browser http://localhost:3000/users. You see **This action returns all users** in your browser. If you open http://localhost:3000/users/1 you see **This action returns user #1.**
