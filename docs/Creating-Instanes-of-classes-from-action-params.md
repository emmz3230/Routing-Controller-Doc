# Creating instances of classes from action params

When user sends a JSON object and you are parsing it, sometimes you want to parse it into object of some class, instead of parsing it into simple literal object. You have ability to do this using [class-transformer](https://github.com/typestack/class-transformer). To use it simply specify a classTransformer: true option on app bootstrap:

```
import { createExpressServer } from 'routing-controllers';

createExpressServer({
  classTransformer: true,
}).listen(3000);
```

Now, when you parse your action params, if you have specified a class, routing-controllers create you a class of that instance with the data sent by a user:

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

If `User` is an interface, the system creates a simple literal object.. If its a class - Then, the system creates an instance of this class.

This technique works with `@Body`, `@Param`, `@QueryParam`, `@BodyParam`, and other decorators. Learn more about class-transformer and how to handle more complex object constructions [here](https://github.com/typestack/class-transformer). This behavior activates by default. If you want to turn off it simply pass `classTransformer: false` to createExpressServer method.you can turn off transforming for [individual controllers or routes](https://github.com/typestack/routing-controllers/?tab=readme-ov-file#selectively-disable-requestresponse-transforming).
