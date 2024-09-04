# Auto validating action params

Sometimes parsing a json object into instance of some class is not enough. E.g. class-transformer doesn't check whether the property's types are correct, so you can get runtime error if you rely on TypeScript type safe. Also you may want to validate the object to check e.g. whether the password string is long enough or entered e-mail is correct.

It can be done easily thanks to integration with [class-validator](https://github.com/typestack/class-validator). This behaviour is enabled by default. If you want to disable it, you need to do it explicitly e.g. by passing `validation: false` option on application bootstrap:

```
import { createExpressServer } from 'routing-controllers';

createExpressServer({
  validation: false,
}).listen(3000);
```

If you want to turn on the validation only for some params, not globally for every parameter, you can do this locally by setting `validate: true` option in parameter decorator options object:

```
@Post("/login")
login(@Body({ validate: true }) user: User) {}
```

Now you need to define the class which type will be used as type of controller's method param. Decorate the properties with appropriate validation decorators.

```
export class User {
  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;
}
```

If you haven't used class-validator yet, you can learn how to use the decorators and handle more complex object validation [here](https://github.com/typestack/class-validator).

Now, if you have specified a class type, your action params will be not only an instance of that class (with the data sent by a user) but they will be validated too, so you don't have to worry about eg. incorrect e-mail or too short password and manual checks every property in controller method body.

```
@Controller()
export class UserController {
  @Post('/login')
  login(@Body() user: User) {
    console.log(`${user.email} is for 100% sure a valid e-mail address!`);
    console.log(`${user.password.length} is for 100% sure 6 chars or more!`);
  }
}
```

If the param doesn't satisfy the requirements defined by class-validator decorators, an error will be thrown and captured by routing-controller, so the client will receive 400 Bad Request and JSON with nice detailed [Validation errors](https://github.com/typestack/class-validator#validation-errors) array.

If you need special options for validation (groups, skipping missing properties, etc.) or transforming (groups, excluding prefixes, versions, etc.), you can pass them as global config as `validation` in createExpressServer method or as a local validate setting for method parameter - `@Body({ validate: localOptions })`.

This technique works not only with `@Body` but also with `@Param`, `@QueryParam`, `@BodyParam` and other decorators.
