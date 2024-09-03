---
sidebar_position: 3
---

# Using Request and Response objects

You can use framework's request and response objects directly. If you want to handle the response by yourself, just make sure you return the response object itself from the action.

```
import { Controller, Req, Res, Get } from 'routing-controllers';

@Controller()
export class UserController {
  @Get('/users')
  getAllUsers(@Req() request: any, @Res() response: any) {
    return response.send('Hello response!');
  }

  @Get('/posts')
  getAllPosts(@Req() request: any, @Res() response: any) {
    // some response functions don't return the response object,
    // so it needs to be returned explicitly
    response.redirect('/users');

    return response;
  }
}

```

@Req() decorator injects you a Request object, and @Res() decorator injects you a Response object. If you have installed typings, you can use their types:

```
import { Request, Response } from 'express';
import { Controller, Req, Res, Get } from 'routing-controllers';

@Controller()
export class UserController {
  @Get('/users')
  getAll(@Req() request: Request, @Res() response: Response) {
    return response.send('Hello response!');
  }
}

```

:::note

koa users can also use @Ctx() context to inject koa's Context object.

:::
