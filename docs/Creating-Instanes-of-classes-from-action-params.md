# Creating instances of classes from action params

When user sends a json object and you are parsing it, sometimes you want to parse it into object of some class, instead of parsing it into simple literal object. You have ability to do this using [class-transformer](https://github.com/typestack/class-transformer). To use it simply specify a classTransformer: true option on application bootstrap:

```
import { createExpressServer } from 'routing-controllers';

createExpressServer({
  classTransformer: true,
}).listen(3000);
```

Now, when you parse your action params, if you have specified a class, routing-controllers will create you a class of that instance with the data sent by a user:

```
export class User {
  firstName: string;
  lastName: string;

  getName(): string {
    return this.lastName + ' ' + this.firstName;
  }
}

@Controller()
export class UserController {
  post(@Body() user: User) {
    console.log('saving user ' + user.getName());
  }
}
```

If `User` is an interface - then simple literal object will be created. If its a class - then instance of this class will be created.

This technique works with `@Body`, `@Param`, `@QueryParam`, `@BodyParam`, and other decorators. Learn more about class-transformer and how to handle more complex object constructions [here](https://github.com/typestack/class-transformer). This behaviour is enabled by default. If you want to disable it simply pass `classTransformer: false` to createExpressServer method. Alternatively you can disable transforming for [individual controllers or routes](https://github.com/typestack/routing-controllers/?tab=readme-ov-file#selectively-disable-requestresponse-transforming).
